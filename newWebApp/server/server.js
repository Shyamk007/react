const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/path.js');
const port = 5000;
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors('*'))
app.use("/",routes);

mongoose.set('strictQuery',false);

mongoose.connect("mongodb://127.0.0.1:27017/nightLab",(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("connected to db");
        }
})

app.listen(port);