import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
const port =3000;
const API = "YOUR_API";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    try {
      res.render("index.ejs");
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });

app.post("/submit", async (req,res)=>{
    const word = req.body.word;
    try{
        const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API}`);
        const data = response.data
        res.render("index.ejs", {word : word, content : data});
    }catch (error){
        console.log(error);
        res.redirect("/")
    }        
});

app.listen(port,()=>{
    console.log(`Server live on port: ${port}`);
})