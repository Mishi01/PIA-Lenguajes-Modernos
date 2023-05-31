

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const authBeca = require("./routes/becas");
const authCat = require("./routes/categorias");
const cors = require ("cors");


dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
app.use("/fotos", express.static(path.join(__dirname, "/fotos")))

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Conectado a MongoDB correctamente"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "fotos");
  },
  filename:(req,file,cb)=>{
    cb(null, req.body.name)
  },
});

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req,res)=>{
  res.status(200).json("Archivo guardado")
})
app.use("/api/auth", authRoute)
app.use("/api/becas", authBeca)
app.use("/api/categorias", authCat)



app.listen("5000", () =>{
  console.log("Backend funciona")
})
