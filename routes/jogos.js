const express = require('express');
const router = express.Router();


let jogos = [
    { id: 1, titulo: "The Legend of Zelda: Breath of the Wild", ano: 2017, desenvolvedoraId: 1, plataformaId: 1 }, 
    { id: 2, titulo: "Red Dead Redemption 2", ano: 2018, desenvolvedoraId: 2, plataformaId: 2 }
];
let proximoId = 3;




router.get('/', (req, res) => {
    res.status(200).json(jogos); 
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogos.find(j => j.id === id);
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({ message: "Jogo não encontrado." }); 
    }
});


router.post('/', (req, res) => {
    const { titulo, ano, desenvolvedoraId, plataformaId } = req.body;

   
    if (!titulo || !ano || !desenvolvedoraId || !plataformaId) {
        return res.status(400).json({ message: "Título, ano, desenvolvedoraId e plataformaId são obrigatórios." }); 
    }

    const novoJogo = { id: proximoId++, titulo, ano, desenvolvedoraId, plataformaId };
    jogos.push(novoJogo);
    res.status(201).json(novoJogo);
});


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


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = jogos.findIndex(j => j.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Jogo não encontrado." });
    }

    jogos.splice(index, 1);
    res.status(204).send(); 
});

module.exports = router;
