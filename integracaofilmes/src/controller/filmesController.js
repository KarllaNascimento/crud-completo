const Filme = require("../model/filme")

const createMovie = async (req,res)=>{
   const filme = new Filme({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      available_on: req.body.available_on,
      created_at: req.body.created_at
   })

   try {
      const novoFilme = await filme.save()
      res.status(201).json(novoFilme)
   }catch (err){
      res.status(400).json({message: err.message})
   } 
}

const getAll = async (req,res)=>{
   const filmes = await Filme.find()
   res.status(200).json(filmes)
}

const getOne = async (req, res) =>{
   const filme = await Filme.findById(req.params.id)

   if (filme == "" || filme == null){
      return res.status(404).json({message:"Filme não encontrado!"})
   }
   res.json(filme)
}

const updateMovie = async (req,res)=>{
   try{

   const filme = await Filme.findById(req.params.id)
   if (filme == "" || filme == null){
      return res.status(404).json({message:"Filme não encontrado!"})
   }

   if (req.body.title != null) {
      filme.title = req.body.title
   }

   if (req.body.description != null) {
      filme.description = req.body.description
   }

   if (req.body.type != null) {
      filme.type = req.body.type
   }

   if (req.body.available_on != null) {
      filme.available_on = req.body.available_on
   }

   if (req.body.created_at != null) {
      filme.created_at = req.body.created_at
   }

   const filmeAtualizado = await filme.save()
   res.json(filmeAtualizado)

   } catch (err) {
      res.status(500).json({message: err.message})
   }

}

const deleteMovie = async (req,res)=>{
   try {
      const filme = await Filme.findById(req.params.id)
      if (filme == "" || filme == null){
         return res.status(404).json({message:"Filme não encontrado!"})
      } 
   
      await filme.remove()
      res.json({message: "Filme deletado com sucesso!"})
   } catch (err) {
      return res.status(500).json({message: err.message})
   }
}

module.exports = {
   createMovie,
   getAll,
   getOne,
   updateMovie,
   deleteMovie
}