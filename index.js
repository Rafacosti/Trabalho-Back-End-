const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


const jogosRouter = require('./routes/jogos');

const desenvolvedorasRouter = require('./routes/desenvolvedores'); 

const plataformasRouter = require('./routes/plataforma'); 
const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');


app.use('/jogos', jogosRouter);
app.use('/desenvolvedoras', desenvolvedorasRouter);
app.use('/plataformas', plataformasRouter);
app.use('/clientes', clientesRouter);
app.use('/pedidos', pedidosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
