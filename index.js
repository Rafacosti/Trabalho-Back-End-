const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Importando as rotas
const jogosRouter = require('./routes/jogos');
// CORRIGIDO: de 'desenvolvedoras' para 'desenvolvedor' para corresponder ao nome do arquivo
const desenvolvedorasRouter = require('./routes/desenvolvedores'); 
// CORRIGIDO: de 'plataformas' para 'plataforma' para corresponder ao nome do arquivo
const plataformasRouter = require('./routes/plataforma'); 
const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');

// Utilizando as rotas com suas URLs base
app.use('/jogos', jogosRouter);
app.use('/desenvolvedoras', desenvolvedorasRouter);
app.use('/plataformas', plataformasRouter);
app.use('/clientes', clientesRouter);
app.use('/pedidos', pedidosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});