const express = require('express');

const routes = express.Router();

//user controllers

const usercontrollers = require('../controllers/usercontrollers');

const { verifytoken, rolebase } = require('../middelware/authmiddelware');

//food verity

const foodcontroller = require('../controllers/foodcontrollers');

//subfood controllers
const subfoodcontrollers = require('../controllers/subfoodcontrollers');

//multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage }).single('image');

//user routes 
routes.post('/register', usercontrollers.register);
routes.get('/login', usercontrollers.login);

//food verity
routes.post('/foodAdd', upload, foodcontroller.foodAdd);
routes.get('/foodView', upload, foodcontroller.foodView);
routes.delete('/foodDelete',upload,foodcontroller.foodDelete);
routes.put('/foodUpdate',upload,foodcontroller.foodUpdate);

//subfood verity
routes.post('/subadd', upload, subfoodcontrollers.subadd);
routes.get('/subView', upload, subfoodcontrollers.subView);

module.exports = routes;