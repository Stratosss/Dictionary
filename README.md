# dictionary_API
## Overview
This project concerns a website that was built using the Express/Node.js platform, with the Axios HTTP client, and which integrates an API from the very famous online dictionary Merriam-Webster (https://www.dictionaryapi.com/). 
The webpage takes a word from the user and returns the pronunciation (if it exists) and an array of definitions (if they exist). 
### Prerequisites
- Go to the directory where that folder lives in and install the necessary packages by typing the following commands in terminal:
  - npm init -y
  - npm i ejs
  - npm i express
  - npm i body-parser
  - npm i axios
- This application requires an API key from https://www.dictionaryapi.com/
  - Create an API key for : "Merriam-Webster's Collegiate® Dictionary with Audio"
  - Copy and paste the API key in index.js file.
### Directions:
- After installing the prerequisites, initialize the application by typing either "node index.js" or "nodemon index.js".
- Open a browser and go to "localhost:3000"
