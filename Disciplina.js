const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Disciplina = sequelize.define('Disciplina', {
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.STRING },
  carga_horaria: { type: DataTypes.INTEGER },
  semestre: { type: DataTypes.INTEGER },
  professor_responsavel: { type: DataTypes.STRING },
});

module.exports = Disciplina;
