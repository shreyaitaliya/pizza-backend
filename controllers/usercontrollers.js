const usermodel = require('../models/usermodel');

const register = async (req, res) => {
    try {
        let userData = await usermodel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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

module.exports = ({
    register
})