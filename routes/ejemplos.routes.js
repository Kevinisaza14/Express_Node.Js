// Si queremos exportar estas rutas de mi server, necesito utilizar la clase Router de express
import express from 'express';
// podemos obviar "new"
const router = new express.Router();

router.get('/', (req, res) => {
    res.send('Hello World GET!');
});

router.post('/', (req, res) => {
    res.send('Hello World POST!');
});

router.put('/', (req, res) => {
    res.send('Hello World PUT!');
});

router.delete('/', (req, res) => {
    res.send('Hello World DELETE!');
});

export default router;