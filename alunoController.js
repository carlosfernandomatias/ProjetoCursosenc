const Aluno = require('../models/Aluno');

const createAluno = async(req, res) => {
  const { nome, matricula, email } = req.body;

  try {
   
    const alunoExistente = await Aluno.findOne({ where: { matricula } });
    if (alunoExistente) {
      return res.status(400).json({ error: 'Matrícula já está cadastrada.' });
    }
  
    const novoAluno = await Aluno.create({ nome, matricula, email });
    res.status(201).json(novoAluno);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar aluno.' });
  }
};

const getAlunos = (req, res) => {
  Aluno.findAll()
    .then(alunos => res.status(200).json(alunos))
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = { createAluno, getAlunos };

