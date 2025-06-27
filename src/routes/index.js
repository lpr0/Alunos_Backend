import express from "express"
import rotasAlunos from "./alunosRoutes.js";
import rotasUsuarios from "./usuariosRoutes.js";

function rotas (app) {
    // lida com as politicas de privacidade, remover antes de enviar
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type','Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
    app.use(express.json());
    //sem validar JWT
    app.use(rotasUsuarios);
    // Validando JWT
    app.use(rotasAlunos);
}

export default rotas;