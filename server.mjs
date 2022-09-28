import express from 'express'
import dotenv from 'dotenv'
import multer from 'multer'
import db from './database/db.js'
import router from './src/route.js'
const app = express()
dotenv.config()
const PORT = process.env.PORT
db()

app.use(multer().any())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/',router)

// const upload = multer({dest:'uploads/'})
// app.post('/upload',upload.single("file"),(req,res)=>{
//     res.json({status:"sucess"});

// })

//single file upload
// const upload = multer({ dest: "uploads/" });
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.json({ status: "success" });
// });

app.listen(PORT,()=>console.log(`listing on port ${PORT}`))