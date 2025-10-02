const express = require('express');
const router = express.Router();

let plataformas = [
{ id: 1, nome: "Nintendo Switch", fabricante: "Nintendo" },
{ id: 2, nome: "PlayStation 4", fabricante: "Sony" }
];
let proximoId = 3;

router.get('/', (req, res) => {
res.status(200).json(plataformas);
});

router.get('/:id', (req, res) => {
const id = parseInt(req.params.id);
const plat = plataformas.find(p => p.id === id);
if (plat) {
res.status(200).json(plat);
} else {
res.status(404).json({ message: "Plataforma não encontrada." });
}
});

router.post('/', (req, res) => {
const { nome, fabricante } = req.body;
if (!nome || !fabricante) {
return res.status(400).json({ message: "Nome e fabricante são obrigatórios." });
}
const novaPlat = { id: proximoId++, nome, fabricante };
plataformas.push(novaPlat);
res.status(201).json(novaPlat);
});

router.put('/:id', (req, res) => {
const id = parseInt(req.params.id);
const { nome, fabricante } = req.body;
const index = plataformas.findIndex(p => p.id === id);
if (index === -1) {
return res.status(404).json({ message: "Plataforma não encontrada." });
}
if (!nome || !fabricante) {
return res.status(400).json({ message: "Nome e fabricante são obrigatórios." });
}
plataformas[index] = { id, nome, fabricante };
res.status(200).json(plataformas[index]);
});

router.delete('/:id', (req, res) => {
const id = parseInt(req.params.id);
const index = plataformas.findIndex(p => p.id === id);
if (index === -1) {
return res.status(404).json({ message: "Plataforma não encontrada." });
}
plataformas.splice(index, 1);
res.status(204).send();
});

module.exports = router;