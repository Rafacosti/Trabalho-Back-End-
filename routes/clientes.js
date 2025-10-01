const express = require('express');
const router = express.Router();

let clientes = [
    { id: 1, nome: "João Silva", email: "joao.silva@email.com", dataNascimento: "1990-05-15" },
    { id: 2, nome: "Maria Oliveira", email: "maria.o@email.com", dataNascimento: "1988-11-20" }
];
let proximoId = 3;

// GET /clientes
router.get('/', (req, res) => {
    res.status(200).json(clientes);
});

// GET /clientes/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
        res.status(200).json(cliente);
    } else {
        res.status(404).json({ message: "Cliente não encontrado." });
    }
});

// POST /clientes
router.post('/', (req, res) => {
    const { nome, email, dataNascimento } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ message: "Nome e email são obrigatórios." });
    }
    const novoCliente = { id: proximoId++, nome, email, dataNascimento };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
});

// PUT /clientes/:id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, dataNascimento } = req.body;
    const index = clientes.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Cliente não encontrado." });
    }
    if (!nome || !email) {
        return res.status(400).json({ message: "Nome e email são obrigatórios." });
    }
    clientes[index] = { id, nome, email, dataNascimento };
    res.status(200).json(clientes[index]);
});

// DELETE /clientes/:id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = clientes.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Cliente não encontrado." });
    }
    clientes.splice(index, 1);
    res.status(204).send();
});

module.exports = router;