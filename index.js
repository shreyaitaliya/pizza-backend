const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dkfkas2wd',
    api_key: '398623515327123',
    api_secret: 'Tvi7UPuOBY7ASdkDqPUPnJTPz1I',
    secure: true
});

app.use(express.urlencoded());

app.use('/', require('./routes/indexroutes'));

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`server start on ${port}`);
})                   