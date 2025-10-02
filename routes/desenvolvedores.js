const express = require('express');
const router = express.Router();

let desenvolvedoras = [
    { id: 1, nome: "Nintendo", paisDeOrigem: "Japão" },
    { id: 2, nome: "Rockstar Games", paisDeOrigem: "EUA" }
];
let proximoId = 3;

router.get('/', (req, res) => {
    res.status(200).json(desenvolvedoras);
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dev = desenvolvedoras.find(d => d.id === id);
    if (dev) {
        res.status(200).json(dev);
    } else {
        res.status(404).json({ message: "Desenvolvedora não encontrada." });
    }
});


router.post('/', (req, res) => {
    const { nome, paisDeOrigem } = req.body;
    if (!nome || !paisDeOrigem) {
        return res.status(400).json({ message: "Nome e país de origem são obrigatórios." });
    }
    const novaDev = { id: proximoId++, nome, paisDeOrigem };
    desenvolvedoras.push(novaDev);
    res.status(201).json(novaDev);
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, paisDeOrigem } = req.body;
    const index = desenvolvedoras.findIndex(d => d.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Desenvolvedora não encontrada." });
    }
    if (!nome || !paisDeOrigem) {
        return res.status(400).json({ message: "Nome e país de origem são obrigatórios." });
    }
    desenvolvedoras[index] = { id, nome, paisDeOrigem };
    res.status(200).json(desenvolvedoras[index]);
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = desenvolvedoras.findIndex(d => d.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Desenvolvedora não encontrada." });
    }
    desenvolvedoras.splice(index, 1);
    res.status(204).send();
});

module.exports = router;