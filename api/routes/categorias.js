const router = require("express").Router()
const Categoria = require("../models/Categoria")

//GET CATEGORIAS

router.get("/", async(req,res) => {
    try{
        const categoria = await Categoria.find()
        res.status(200).json(categoria)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router