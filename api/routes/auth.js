const router = require("express").Router();
const User = require("../models/Usuario");
const bcrypt = require("bcrypt");

//Registro
router.post("/registrar",async (req,res)=>{
try{

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.Contraseña, salt);
    const newUser =new User({
        Nombre_usuario: req.body.Nombre_usuario,
        Correo: req.body.Correo,
        Contraseña: hashedPass, 
    });

    const user = await newUser.save();
    res.status(200).json(user);
   } catch(err){
    res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req,res) => {
    try{
        const user = User.findOne(({Nombre_usuario: req.body.Nombre_usuario}))
        !user && res.status(400).json("No existe el usuario")

        const validate = await bcrypt.compare(req.body.Contraseña, user.Contraseña)
        !valited && res.status(400).json("Contraseña incorrecta")
        
        const {Contraseña, ...otros} = user._doc;
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router