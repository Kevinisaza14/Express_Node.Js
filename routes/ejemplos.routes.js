// Si queremos exportar estas rutas de mi server, necesito utilizar
import express from 'express';

// para crear una instancia de express // con el comando .router indicamos que las instancias que usen esta const seran idenficadas como rotas o endpoins que se puedan usar fuera de el archivo.
const router = new express.Router(); // tambien se puede escribir como const router = new express.router()

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