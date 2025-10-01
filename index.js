const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para interpretar o corpo das requisições como JSON [cite: 15]
app.use(express.json());

// Importando as rotas
const jogosRouter = require('./routes/jogos');
const desenvolvedorasRouter = require('./routes/desenvolvedoras');
const plataformasRouter = require('./routes/plataformas');
const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');

// Utilizando as rotas com suas URLs base [cite: 13]
app.use('/jogos', jogosRouter);
app.use('/desenvolvedoras', desenvolvedorasRouter);
app.use('/plataformas', plataformasRouter);
app.use('/clientes', clientesRouter);
app.use('/pedidos', pedidosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});