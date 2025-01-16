const express = require('express');
const { createAluno, getAlunos } = require('../controllers/alunoController');
const router = express.Router();
const path = require('path'); 


router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/cadastroAluno.html'));
  });

  router.get('/consultar', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/consultaAluno.html'));
  });
  
router.post('/', createAluno);
router.get('/', getAlunos);

module.exports = router;
