const filmes = require ("./routes/filmes.routes")
const express = require("express")
const cors = require("cors")
const db = require("../src/data/database")
db.connect()

const app = express()


app.use(cors())
app.use(express.json())

app.use("/filmes", filmes)

module.exports = app