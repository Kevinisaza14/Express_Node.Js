import express from 'express';
const router = new express.Router();
// import database connection
import connection from '../database/connection.js';

router.get('/users', async (req, res) => {
    try {
        const sql = 'SELECT * FROM users';
        const [result] = await connection.query(sql);
        return res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.post("/user", async (req, res) => {
    const user = req.body;
    try {
        const sql =
          `INSERT INTO users VALUES (${user.idUser}, "${user.userName}", "${user.email}", "${user.password}", default)`;
      
        await connection.query(sql);
        res.json({"msg": "Usuario registrado correctamente"});
        
      } catch (err) {
        console.log(err);
      }
});

router.put('/users', async (req, res) => {
  
});



export default router;