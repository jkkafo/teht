const express = require('express');
const cors = require('cors')
const mysql = require('mysql2/promise');
const config = require('../server/config');

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = 3001

app.get("/", async function (req, res) {
  try {
    const connection = await mysql.createConnection(config.db)
    //res.status(200).send('Db connection done')
    const [result, ] = await connection.execute('select * from item')
    
    res.status(200).json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})


app.listen(port)

