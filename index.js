import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
const port =3000;

const api_key = "966c5bc5-18b6-49eb-9953-8ff4b0b366b5";

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

app.post("/search", async (req,res)=>{
    const word = req.body.word;
    if (word){
      try{
          const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${api_key}`);
          const data = response.data
          if (data[0].meta){
          res.render("index.ejs", {word : word, content : data});
          } else {
            res.render("index.ejs", {message : "Word not found!😩", word: false, trigger : true});
          }
      }catch (error){
          console.log(error);
          res.render("index.ejs", {message : "Word not found!😩", word: false, trigger : true})
      }} else {
        res.render("index.ejs", {message : "Please type a word!😊", word: false, trigger : true});
      }     
});


app.listen(port,()=>{
    console.log(`Server live on port: ${port}`);
})