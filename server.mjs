import express from 'express'
import multer from 'multer'
import db from './database/db.js'
const app = express()
const PORT = 3000
db()

// const upload = multer({dest:'uploads/'})
// app.post('/upload',upload.single("file"),(req,res)=>{
//     res.json({status:"sucess"});

// })

//single file upload
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ status: "success" });
});

app.listen(PORT,()=>console.log(`listing on port ${PORT}`))