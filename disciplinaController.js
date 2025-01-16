const Disciplina = require('../models/Disciplina');

const createDisciplina = (req, res) => {
  const { nome, descricao, carga_horaria, semestre, professor_responsavel } = req.body;
  Disciplina.create({ nome, descricao, carga_horaria, semestre, professor_responsavel })
    .then(disciplina => res.status(201).json(disciplina))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getDisciplinas = (req, res) => {
  Disciplina.findAll()
    .then(disciplinas => res.status(200).json(disciplinas))
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = { createDisciplina, getDisciplinas };
