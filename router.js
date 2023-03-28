const { Router } = require("express");
const pool = require("./db");

const router = Router();

const tables = ["user","order"];

tables.forEach((table) =>{

router.get(`/${table}`, async (req, res) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM ${table}s LIMIT 100`);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
  });
  
} )


router.get("/user/:id", async (req, res) => {
    const  {id} = req.params;
    try {
      const { rows } = await pool.query("SELECT * FROM users where id=$1",[id]);
      res.json({ data: rows });
    } catch (err) {
      res.sendStatus(500);
    }
  });
  

module.exports = router;