import express from "express"
import axios from "axios"

const app= express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

app.get("/", async (req,res) =>{
        res.render("index.ejs",{content : "API Response"});
})

app.get("/handle-request", async (req,res)=>{

    const statusCode = req.query.httpStatusCode
    const URL_API = `https://http.dog/${statusCode}.jpg`
    try{
         await axios.get(URL_API)
res.render("index.ejs",{ content: URL_API})
    }catch(error){
        res.status(404).send("error:" + error.message)
    }
})

//hello

app.listen(port, ()=>{
    console.groupCollapsed(`The Server is listening on ${port}`)
})