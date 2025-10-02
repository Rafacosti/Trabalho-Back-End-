const express = require('express');
const router = express.Router();

let pedidos = [
    { id: 1, clienteId: 1, jogoId: 2, dataPedido: "2025-09-30", valor: 250.00 },
    { id: 2, clienteId: 2, jogoId: 1, dataPedido: "2025-10-01", valor: 299.90 }
];
let proximoId = 3;

// GET /pedidos
router.get('/', (req, res) => {
    res.status(200).json(pedidos);
});

// GET /pedidos/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        res.status(200).json(pedido);
    } else {
        res.status(404).json({ message: "Pedido não encontrado." });
    }
});

// POST /pedidos
router.post('/', (req, res) => {
    const { clienteId, jogoId, valor } = req.body;
    if (!clienteId || !jogoId || !valor) {
        return res.status(400).json({ message: "clienteId, jogoId e valor são obrigatórios." });
    }
    const novoPedido = { id: proximoId++, clienteId, jogoId, dataPedido: new Date().toISOString().split('T')[0], valor };
    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
});

// PUT /pedidos/:id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { clienteId, jogoId, dataPedido, valor } = req.body;
    const index = pedidos.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Pedido não encontrado." });
    }
    if (!clienteId || !jogoId || !valor || !dataPedido) {
        return res.status(400).json({ message: "clienteId, jogoId, dataPedido e valor são obrigatórios." });
    }
    pedidos[index] = { id, clienteId, jogoId, dataPedido, valor };
    res.status(200).json(pedidos[index]);
});

// DELETE /pedidos/:id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pedidos.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Pedido não encontrado." });
    }
    pedidos.splice(index, 1);
    res.status(204).send();
});

module.exports = router;