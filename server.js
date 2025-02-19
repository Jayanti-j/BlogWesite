import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port=3000;
const app=express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.listen(port,()=>{console.log(`port active on ${port}`)});