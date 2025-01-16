const express = require('express');
const sequelize = require('./config/database');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const alunoRoutes = require('./routes/alunoRoutes');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/disciplina', disciplinaRoutes);
app.use('/aluno', alunoRoutes);

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, './views/index.html'));
});

sequelize.sync({ force: false })
  .then(() => console.log('Tabelas sincronizadas com sucesso.'))
  .catch(err => console.error('Erro ao sincronizar as tabelas:', err));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
