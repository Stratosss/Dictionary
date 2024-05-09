import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
const port =3000;

const api_key = "process.env.API_KEY";  //Type API key here

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    try {
      res.render("index.ejs", {sound : ""});
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message
      });
    }
  });

app.post("/search", async (req,res)=>{
    const word = req.body.word;
    if (word){
      try{
          const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${api_key}`);
          const data = response.data
          const audio = data[0].hwi.prs[0].sound.audio
          console.log(data);
          if (data[0].meta){
          res.render("index.ejs", {word : word, content : data, sound: audio});
          } else {
            res.render("index.ejs", {message : "Word not found!😩", word: false, trigger : true, sound : ""});
          }
      }catch (error){
          console.log(error);
          res.render("index.ejs", {message : "Word not found!😩", word: false, trigger : true, sound : ""})
      }} else {
        res.render("index.ejs", {message : "Please type a word!😊", word: false, trigger : true, sound : ""});
      }     
});


app.listen(port,()=>{
    console.log(`Server live on port: ${port}`);
})
