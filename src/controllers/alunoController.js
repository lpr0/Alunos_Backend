const alunos = [{id:1, nome:"teste", ra:"0000000", nota1:8.5, nota2:9.0}, {id:2, nome:"teste2", ra:"1111111", nota1:5.5, nota2:6.0}]

function encontrarID (id) {
    return alunos.findIndex((alu)=>{
        return alu.id === Number(id)
    })
}

function listarAlunos (req, res) {
    res.status(200).json(alunos);
}

function retornarLivro (req, res) {
    let ID = encontrarID(req.params.id);
    if (ID !== -1) {
        res.status(200).json(alunos[ID]);
    } else {
        res.status(404).json({ "message" : "Não encontrado"})
    }
}

function adiconarAluno (req, res) {
        if (isNaN(req.body.id) || encontrarID(req.body.id) !== -1) {
            res.status(400).json({ "message" : "Id inválido"})
        } else if (isNaN(req.body.nota1) || isNaN(req.body.nota2)) {
            res.status(400).json({ "message" : "Notas inválidas"})
        } else {
            alunos.push(req.body);
            res.status(201).json({ "message" : "Aluno criado com sucesso", "aluno": req.body})
        }
}

function atualizarAluno (req, res) {
    let ID = encontrarID(req.params.id);
    if (ID !== -1) {
        // transformar isso em um midware
        if (isNaN(req.body.nota1) || isNaN(req.body.nota2)) {
            res.status(400).json({ "message" : "Notas inválidas"})
        } else {    
            alunos[ID] = req.body;
            res.status(200).json(alunos[ID]);
        }
    } else {
        res.status(404).json({ "message" : "Não encontrado"})
    }
}

function excluirAluno (req, res) {
    let ID = encontrarID(req.params.id);
    if (ID !== -1) {
        res.status(200).json(alunos[ID]);
        alunos.splice(ID, 1);
    } else {
        res.status(404).json({ "message" : "Não encontrado"})
    }
}

function medias (req, res) {
    let medias = alunos.slice(0, alunos.length);
    medias = medias.map((alu) => {
        return {"nome":alu.nome, "media": (0 + alu.nota1 + alu.nota2) / 2}
    })

    res.status(200).json(medias);
}

function aprovados (req, res) {
    let medias = alunos.slice(0, alunos.length);
    medias = medias.map((alu) => {
        return {"nome":alu.nome, "status": ((0 + alu.nota1 + alu.nota2) < 12) ? "reprovado" : "aprovado"}
    })

    res.status(200).json(medias);
}

export {listarAlunos, adiconarAluno, retornarLivro, atualizarAluno, excluirAluno, medias, aprovados};