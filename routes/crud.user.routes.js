import express from 'express';
const router = new express.Router();
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";

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

router.post("/user", (req, res) => {
  const user = req.body;
  // encriptar password
  const saltRounds = 10;
  bcrypt.hash(user.password, saltRounds).then(async function (hashPass) {
    try {
      const userId = uuidv4();
      const sql =
        `INSERT INTO users VALUES ("${userId}", "${user.userName}", "${user.email}", "${hashPass}", default)`;
  
      await connection.query(sql);
      res.json({ "msg": "Usuario registrado correctamente" });
  
    } catch (err) {
      console.log(err);
    }
  });
});

router.put('/user/:id', async (req, res) => {
  try {
    const idUser = req.params.id;
    const userBody = req.body;
    const sql =
      `update users set userName = "${userBody.userName}" where idUser = "${idUser}";`;

    await connection.query(sql);
    res.json({ "msg": "Usuario actualizado correctamente" });
  } catch (err) {
    console.log(err);
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const idUser = req.params.id;
    const sql =
      `delete from users where idUser = "${idUser}";`;
    await connection.query(sql);
    res.json({ "msg": "Usuario borrado correctamente" });
  } catch (err) {
    console.log(err);
  }
});

export default router;