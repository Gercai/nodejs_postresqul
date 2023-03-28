const { Router } = require("express");
const pool = require("./db");

const router = Router();

const tables = ["user","order"];

// Nur Die Fälle wo es Sinn macht! Spricht Gets. Rest ohne foreach.

tables.forEach((table) =>{


    router.get(`/${table}`, async (req, res) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM ${table}s LIMIT 100`);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
  });
  

router.get(`/${table}/:id`, async (req, res) => {
    const  {id} = req.params;
    try {
      const { rows } = await pool.query(`SELECT * FROM ${table}s where id=$1`,[id]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
  });
} )

// Editposts
router.get("/adduser", (req, res) => {
    res.sendFile('./views/addUser.html', { root: __dirname });
})


// POSTS!
router.post(`/user`, async (req, res) => {
    const {first_name, last_name, age, active}  = req.body;
    console.log(first_name);
    try {
      const { rows } = await pool.query(`INSERT INTO users (first_name,last_name,age) VALUES($1,$2,$3) RETURNING *`
      ,[first_name, last_name, age]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
    res.end();
  });

  router.post(`/order`, async (req, res) => {
    try {
      const { rows } = await pool.query(`INSERT INTO orders (price,user_id) VALUES($1,$2) RETURNING *`
      ,["20","1"]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
    res.end();
  });
  

  // PUT

  router.put(`/user`, async (req, res) => {
    try {
      const { rows } = await pool.query(`UPDATE users SET first_name=$1,last_name=$2 where id=$3 RETURNING *`
      ,["Usagi","Uma","1"]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
    res.end();
  });

  router.put(`/order`, async (req, res) => {
    try {
      const { rows } = await pool.query(`UPDATE users SET price=$1 where id=$2 RETURNING *`
      ,["23","1"]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
    res.end();
  });


  



module.exports = router;