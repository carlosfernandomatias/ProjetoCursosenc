const express = require('express');
const { createDisciplina, getDisciplinas } = require('../controllers/disciplinaController');
const router = express.Router();
const path = require('path');


router.post('/', createDisciplina);
router.get('/', getDisciplinas);

module.exports = router;
