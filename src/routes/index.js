import express from "express"
import rotasAlunos from "./alunosRoutes.js";
import rotasUsuarios from "./usuariosRoutes.js";

function rotas (app) {
    app.use(express.json());
    //sem validar JWT
    app.use(rotasUsuarios);
    // Validando JWT
    app.use(rotasAlunos);
}

export default rotas;