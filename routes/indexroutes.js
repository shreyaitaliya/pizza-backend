const express = require('express');

const routes = express.Router();

//user controllers

const usercontrollers = require('../controllers/usercontrollers');


//user routes 
routes.post('/register', usercontrollers.register);


module.exports = routes;