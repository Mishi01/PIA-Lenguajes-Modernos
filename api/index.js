const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const authBeca = require("./routes/becas");
const authCat = require("./routes/categorias");


dotenv.config();
app.use(express.json());
app.use("/fotos", express.static(path.join(__dirname, "/fotos")))

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, callb) =>{
    callb(null, "fotos")
  },
  filename:(req,file,callb)=>{
    callb(null, req.body.name)
  },
})
const upload = multer({storage: storage})

app.use("/upload", upload.single("file"), (req,res)=>{
  res.status(200).json("Archivo guardado")
})
app.use("/api/auth", authRoute)
app.use("/api/becas", authBeca)
app.use("/api/categorias", authCat)



app.listen("5000", () =>{
  console.log("Backend funciona")
})
