import express from "express"
import {listarAlunos, adiconarAluno, retornarLivro, atualizarAluno, excluirAluno, medias, aprovados} from "../controllers/alunoController.js" 
import validarJWT from "../middlewares/JWTvalidacao.js"

const rotasAlunos = express.Router();

rotasAlunos.use(validarJWT);
rotasAlunos.get("/alunos/medias", medias);
rotasAlunos.get("/alunos/aprovados", aprovados);
rotasAlunos.get("/alunos/:id", retornarLivro);
rotasAlunos.post("/alunos", adiconarAluno);
rotasAlunos.put("/alunos/:id", atualizarAluno);
rotasAlunos.delete("/alunos/:id", excluirAluno);
rotasAlunos.get("/alunos", listarAlunos);

 
export default rotasAlunos;