const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aluno = sequelize.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  matricula: {
    type: DataTypes.STRING,
    allowNull: false, 
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Aluno;
