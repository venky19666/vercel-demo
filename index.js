const express = require("express");

const app = express();

app.get("/api",(req,res)=>{
    res.json({"demo": "tester"})
})

app.listen(4000);
