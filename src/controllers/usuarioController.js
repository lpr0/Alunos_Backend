import "dotenv/config"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Criar o arquivo DotEnv com uma chave aleatória caso ele não exista

const user = [];

function criarUsuario (req, res) {
    // criptografar dados
    let {username, password} = req.body;
    password = bcrypt.hashSync(password, 10);
    // Validar se não existe outro usuário com mesmo login já cadastrado
    if (user.findIndex((user) => {
        return user.username === username;
    }) !== -1) {
         res.status(400).json({ "message" : "Nome inválido"})
    } else {
        // cadastrar usuário
        user.push({"username":username, "password":password});
        res.status(201).json({ "message" : "usuário registrado"})
    }
}

function login (req, res) {
    // criptografar dados
    let {username, password} = req.body;
    username = user.find((user) => {
        return user.username === username;
    });

    // ver se os dados batem
    if (username !== undefined && bcrypt.compareSync(password, username.password)) {
        // criar e retornar JWT
        const token = jwt.sign({"username": username.username}, process.env.CHAVE, { "expiresIn": '1h', "algorithm": 'HS256' })
        res.status(200).json({"message" : "login realizado com sucesso", "jwt": token});

    } else {res.status(400).json({ "message" : "login inválido"})}
}

export {criarUsuario, login};