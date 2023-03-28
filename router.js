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
router.post("/adduser", (req, res) => {
    res.sendFile('./views/addUser.html', { root: __dirname });
})


// POSTS!

router.post(`/user`, async (req, res) => {
    const {first_name, last_name, age, active}  = req.body;
    try {
      const { rows } = await pool.query(`INSERT INTO users (first_name,last_name,are,active) VALUES($1,$2,$3,$4) RETURNING *`
      ,[first_name, last_name, age, active]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
    res.end();
  });
  





module.exports = router;