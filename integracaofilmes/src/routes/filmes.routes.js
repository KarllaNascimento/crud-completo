const controller = require("../controller/filmesController")
const express = require("express")
const Filme = require("../model/filme")
const router = express.Router()

//C
router.post("/", controller.createMovie)

//R
router.get("/", controller.getAll)

router.get("/", controller.getOne)

//U
router.patch("/", controller.updateMovie)


//D
router.delete("/", controller.deleteMovie)

module.exports  = router
