const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema({
    Nombre_usuario:{
        type: String,
        required:true,
        unique:true
    },
    Correo:{
        type: String,
        required:true,
        unique: true,
    },Contraseña:{
        type:String,
        required: true
    },
    Tipo:{
        type:String,
        required:true,
        default: "usuario"
    }
},
    {timestamps:true }

);

module.exports = mongoose.model("Usuario", UserSchema);