const express = require('express');
const router = express.Router();

[span_2](start_span)// Dados armazenados em memória[span_2](end_span)
let jogos = [
    { id: 1, titulo: "The Legend of Zelda: Breath of the Wild", ano: 2017, desenvolvedoraId: 1, plataformaId: 1 },
    { id: 2, titulo: "Red Dead Redemption 2", ano: 2018, desenvolvedoraId: 2, plataformaId: 2 }
];
let proximoId = 3;

[span_3](start_span)// Rotas para o CRUD de Jogos[span_3](end_span)

// GET /jogos - Listar todos os jogos
router.get('/', (req, res) => {
    [span_4](start_span)res.status(200).json(jogos); // Status 200 OK[span_4](end_span)
});

// GET /jogos/:id - Obter um jogo por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogos.find(j => j.id === id);
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        [span_5](start_span)res.status(404).json({ message: "Jogo não encontrado." }); // Status 404 Not Found[span_5](end_span)
    }
});

// POST /jogos - Criar um novo jogo
router.post('/', (req, res) => {
    const { titulo, ano, desenvolvedoraId, plataformaId } = req.body;

    [span_6](start_span)// Validação de campos obrigatórios[span_6](end_span)
    if (!titulo || !ano || !desenvolvedoraId || !plataformaId) {
        return res.status(400).json({ message: "Título, ano, desenvolvedoraId e plataformaId são obrigatórios." }); [span_7](start_span)[span_8](start_span)// Status 400 Bad Request[span_7](end_span)[span_8](end_span)
    }

    const novoJogo = { id: proximoId++, titulo, ano, desenvolvedoraId, plataformaId };
    jogos.push(novoJogo);
    res.status(201).json(novoJogo); [span_9](start_span)// Status 201 Created[span_9](end_span)
});

// PUT /jogos/:id - Atualizar um jogo
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, ano, desenvolvedoraId, plataformaId } = req.body;
    const index = jogos.findIndex(j => j.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Jogo não encontrado." });
    }
    
    if (!titulo || !ano || !desenvolvedoraId || !plataformaId) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    jogos[index] = { id, titulo, ano, desenvolvedoraId, plataformaId };
    res.status(200).json(jogos[index]);
});

// DELETE /jogos/:id - Deletar um jogo
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = jogos.findIndex(j => j.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Jogo não encontrado." });
    }

    jogos.splice(index, 1);
    [span_10](start_span)res.status(204).send(); // Status 204 No Content[span_10](end_span)
});

module.exports = router;