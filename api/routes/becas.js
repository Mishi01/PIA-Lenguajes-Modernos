const router = require("express").Router();
const Beca = require("../models/Beca");

//CREAR POST
router.post("/",async (req,res)=>{
    const newBeca = new Beca(req.body)

    try{
        const saveBeca = await newBeca.save()
        res.status(200).json(saveBeca)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE POST
router.put("/:id",async (req,res)=>{
    try{
        const beca = await Beca.findById(req.params.id)
            try {
                const updateBeca = await Beca.findByIdAndUpdate(
                    req.params.id,{
                        $set :req.body
                    },
                    {
                        new:true,
                    }
                )
            res.status(200).json(updateBeca)
            }catch(err){res.status(200).json(err)}
    }catch(err){
        res.status(500).json(err)
    }
})

//BORRAR POST
router.delete("/:id",async (req,res)=>{
    try{
        const beca = await Beca.findById(req.params.id)
            try{
                await beca.deleteOne()
                res.status(200).json("Beca eliminada")
            }catch(err){
                res.status(500).json(err)
            }      
    }catch(err){
        res.status(500).json(err)
    }
})

//GET POST
router.get("/:id",async (req,res)=>{
    try{
        const beca = await Beca.findById(req.params.id)
        res.status(200).json(beca)
    
    }catch(err){
        res.status(404).json(err)
    }
})

//GET ALL POST
router.get("/",async (req,res)=>{
    const catName = req.query.cats;
    try{
        let becas;
        if(catName){
            becas = await Beca.find({
                categoria:{
                    $in:[catName],
                },
            });
        }else{
            becas = await Beca.find();
        }
        res.status(200).json(becas)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router