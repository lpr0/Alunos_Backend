import express from "express"
import {criarUsuario, login} from "../controllers/usuarioController.js"

const rotasUsuarios = express.Router();

rotasUsuarios.post("/register", criarUsuario);
rotasUsuarios.post("/login", login);

export default rotasUsuarios;