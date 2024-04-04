const jwt = require('jsonwebtoken');
const usermodel = require('../models/usermodel');

const register = async (req, res) => {
    try {
        let duplicate = await usermodel.findOne({ email: req.body.email });
        if (duplicate) {
            return res.status(400).send({
                sucess: false,
                message: "User Already Register"
            })
        }
        let userData = await usermodel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        })
        return res.status(200).send({
            sucess: true,
            message: 'register sucessfully'
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const login = async (req, res) => {
    try {
        let user = await usermodel.findOne({ email: req.body.email });
        if (!user || user.password != req.body.password) {
            return res.status(400).send({
                sucess: false,
                message: "email and password are not same"
            })
        }
        let token = await jwt.sign({ user: user }, "rw4", { expiresIn: "1hr" });
        return res.status(200).send({
            sucess: true,
            message: "token is here",
            token
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    register, login
})