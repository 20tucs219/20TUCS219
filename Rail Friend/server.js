const express = require("express");
const app = express();

const axios = require("axios");

require("dotenv").config();

const token = process.env.HEADER;

const headers = { 'Authorization': token };


app.get("/train/trains",(req,res)=>{
    async function getRails() {
        try {
          const response = await axios.get("http://20.244.56.144/train/trains",headers);
            res.send(response);
        } catch (error) {
          console.error(error);
        }
      }
});


app.listen(process.env.PORT,()=>{
    console.log("Server running on port",process.env.PORT);
})