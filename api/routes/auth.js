const router = require("express").Router()
const User = require("../models/Usuario")
const bcrypt = require("bcrypt")

//Registro
router.post("/registrar",async (req,res)=>{
try{
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.Contraseña, salt)

    const newUser =new User({
        Nombre_usuario: req.body.Nombre_usuario,
        Correo: req.body.Correo,
        Contraseña: hashedPass, 
    })

    const user = await newUser.save();
    res.status(200).json(user);
   } catch(err){
    res.status(500).json(err);
    }
});

//login
router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({Nombre_usuario:req.body.Nombre_usuario})
        !user && res.status(400).json("Usuario incorrecto")

        const validate = await bcrypt.compare(req.body.Contraseña, user.Contraseña)

        !validate && res.status(400).json("Contraseña incorrecta")

        const {Contraseña,...other} = user._doc
        res.status(200).json(other)
    } catch(err){
        res.status(500).json(err);
        }
})

module.exports = router