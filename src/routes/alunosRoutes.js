import express from "express"
import {listarAlunos, adiconarAluno, retornarLivro, atualizarAluno, excluirAluno} from "../controllers/alunoController.js" 
import validarJWT from "../middlewares/JWTvalidacao.js"

const rotasAlunos = express.Router();

rotasAlunos.use(validarJWT);
rotasAlunos.get("/alunos", listarAlunos);
rotasAlunos.get("/alunos/:id", retornarLivro);
rotasAlunos.post("/alunos", adiconarAluno);
rotasAlunos.put("/alunos/:id", atualizarAluno)
rotasAlunos.delete("/alunos/:id", excluirAluno)
 
export default rotasAlunos;