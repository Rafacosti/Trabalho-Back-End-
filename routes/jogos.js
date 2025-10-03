const express = require('express');
const router = express.Router();

// Dados armazenados em memória
let jogos = [
    { id: 1, titulo: "The Legend of Zelda: Breath of the Wild", ano: 2017, desenvolvedoraId: 1, plataformaId: 1 }, // <--- CORRIGIDO!
    { id: 2, titulo: "Red Dead Redemption 2", ano: 2018, desenvolvedoraId: 2, plataformaId: 2 }
];
let proximoId = 3;

// Rotas para o CRUD de Jogos

// GET /jogos - Listar todos os jogos
router.get('/', (req, res) => {
    res.status(200).json(jogos); // Status 200 OK
});

// GET /jogos/:id - Obter um jogo por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogos.find(j => j.id === id);
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({ message: "Jogo não encontrado." }); // Status 404 Not Found
    }
});

// POST /jogos - Criar um novo jogo
router.post('/', (req, res) => {
    const { titulo, ano, desenvolvedoraId, plataformaId } = req.body;

    // Validação de campos obrigatórios
    if (!titulo || !ano || !desenvolvedoraId || !plataformaId) {
        return res.status(400).json({ message: "Título, ano, desenvolvedoraId e plataformaId são obrigatórios." }); // Status 400 Bad Request
    }

    const novoJogo = { id: proximoId++, titulo, ano, desenvolvedoraId, plataformaId };
    jogos.push(novoJogo);
    res.status(201).json(novoJogo); // Status 201 Created
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
    res.status(204).send(); // Status 204 No Content
});

module.exports = router;