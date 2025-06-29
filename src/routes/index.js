import express from "express"
import rotasAlunos from "./alunosRoutes.js";
import rotasUsuarios from "./usuariosRoutes.js";

function rotas (app) {
    /*
    app.use((req, res, next)=> {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', '*');

        next();
    })*/

    app.use(express.json());
    //sem validar JWT
    app.use(rotasUsuarios);
    // Validando JWT
    app.use(rotasAlunos);
}

export default rotas;