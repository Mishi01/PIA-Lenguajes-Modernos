const mongoose = require ("mongoose")

const PostSchema = new mongoose.Schema(
    {
        titulo:{
            type:String,
            required:true,
            unique:true
        },
        descripcion:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:false,
        },
        categoria:{
            type:Array,
            required: false
        },
    },
    {timestamps:true }

);

module.exports = mongoose.model("Post", PostSchema);