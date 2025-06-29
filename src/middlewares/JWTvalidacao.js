import "dotenv/config"
import jwt from "jsonwebtoken";

function validarJWT (req, res, next) {
    let header = req.header('Authorization');
    let token;
    
    if (header) {
        header = header.split(" ");
        if (header.length === 2) {
            token = header[1]
        }
    }

    if (!token) {
        res.status(401).json({ "message" : "Token JWT não fornecido"});
        return;
    }
   
    jwt.verify(token, process.env.CHAVE, (erro, user) => {

        if (erro) {
            switch (erro) {
                case "TokenExpiredError":
                    res.status(401).json({ "message" : "Token expirado"});
                    return;
                case "JsonWebTokenError":
                    res.status(403).json({ "message" : "Token inválido"});
                     return;
                default:
                    res.status(403).json({ "message" : "Erro na verificação do token"});
                    return;
            }
        }
        req.user = user;
        next();
    })
    return;
}

export default validarJWT;