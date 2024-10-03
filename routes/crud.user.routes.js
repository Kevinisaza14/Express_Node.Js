import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import connection from '../database/connection.js';

const clientResponses = (response, message, headerContent, code) => {
    response.statusCode = code;
    response.setHeader('Content-Type', headerContent);
    response.end(message);
}
// TODO: Crear las rutas para el CRUD productos. Validar los datos:
// - Que llegue el objecto por el body
// - Que llegue con las props adecuadas
// - Que lleguen los valores de las prop adecuadas

router.get('/products', async (req, res) => {
    try {
        const sql = 'SELECT * FROM products';
        const [result] = await connection.query(sql);
        return res.json(result);
    } catch (err) {
        return {error: true, message: `No existen datos por mostrar`};
    }
});
router.post('/products', async(request, res) => {
    const product = request.body;
    if (!product.productName || !product.price || !product.stock) {
        return res.sendFile( "Faltan datos" );
    }
    try {
        const productId = uuidv4();
        const sql = `INSERT INTO products VALUES ("${productId}", "${product.productName}", "${product.price}", "${product.stock}", default)`;
        await connection.query(sql);
        res.send( "Producto creado correctamente" );
    } 
    catch (err) {
        console.log(err + `Error al registrar el producto`);
    }
});

router.put('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const productBody = req.body;
        if (productBody.productName && productBody.price && productBody.stock) {
            const sql = `update products set productName = "${productBody.productName}", price = "${productBody.price}", stock = "${productBody.stock}" where idProduct = "${productId}";`;
            await connection.query(sql);
            res.send( "Producto actualizado correctamente" );
        }
        else if(productBody.productName && productBody.price){
            const sql = `update products set productName = "${productBody.productName}", price = "${productBody.price}" where idProduct = "${productId}";`;
            await connection.query(sql);
            res.send( "Nombre y Precio de Producto actualizado correctamente" );
        } else if(productBody.productName && productBody.stock){
            const sql = `update products set productName = "${productBody.productName}", stock = "${productBody.stock}" where idProduct = "${productId}";`;
            await connection.query(sql);
            res.send( "Nombre y Stock de Producto actualizado correctamente" );
        } else{
            const sql = `update products set productName = "${productBody.productName}" where idProduct = "${productId}";`;
            await connection.query(sql);
            res.send( "Nombre del Producto actualizado correctamente" );
        }
    }
    catch (err) {
        res.send( `Error al actualizar el producto` );
        console.log(err);
    }
});

router.delete('/products', async(req, res) => {
    res.send( "Falta el id del producto" );
});

router.delete('/products/:id', async(req, res) => {
    const productId = req.params.id;
    const temp = `SELECT idProduct FROM products where idProduct = "${productId}";`;
    const [result] = await connection.query(temp);
    if (result.length === 0) {
        return res.sendFile( "Usuario no existe" );
    }
    try{
        const sql = `delete from products where idProduct = "${productId}";`;
        await connection.query(sql);
        res.send( "Producto eliminado correctamente" );
    }
    catch (err) {
        res.send( `Error al borrar el producto` );
        console.log(err);
    }
});

export default router;