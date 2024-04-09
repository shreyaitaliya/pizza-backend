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

const storage = multer.diskStorage({});

// Multer upload configuration
const upload = multer({ storage })

//user routes 
routes.post('/register', usercontrollers.register);
routes.get('/login', usercontrollers.login);

//food verity
routes.post('/foodAdd', upload.single('image'), foodcontroller.foodAdd);
routes.get('/foodView', foodcontroller.foodView);
routes.delete('/foodDelete', foodcontroller.foodDelete);
routes.put('/foodUpdate', upload.single('image'), foodcontroller.foodUpdate);

//subfood verity
routes.post('/subadd', subfoodcontrollers.subadd);
routes.get('/subView', subfoodcontrollers.subView);

module.exports = routes;