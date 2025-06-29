import express from "express"
import rotasAlunos from "./alunosRoutes.js";
import rotasUsuarios from "./usuariosRoutes.js";

function rotas (app) {
    
    app.use((req, res, next)=> {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*')
        res.setHeader('Access-control-request-headers', 'authorization, content-type');
        res.setHeader('mode', 'cors');
        next();
    })

    app.options('/*', (req, res)=> {
        res.status(200).json({ "message" : "Prefilght feito *****"});
    })

    app.use(express.json());
    //sem validar JWT
    app.use(rotasUsuarios);
    // Validando JWT
    app.use(rotasAlunos);
}

export default rotas;