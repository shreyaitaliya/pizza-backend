const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');    

app.use(express.urlencoded());

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/', require('./routes/indexroutes'));

app.listen(port, (error) => {
    if (error) {
        console.log(error);    
        return false;
    }
    console.log(`server start on ${port}`);
})                   