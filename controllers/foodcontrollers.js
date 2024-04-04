const foodmodel = require('../models/foodModel');

const foodAdd = async (req, res) => {
    try {
        let foodadd = await foodmodel.create({
            foodname: req.body.foodname,
            image: req.file.path
        })
        return res.status(200).send({
            success: true,
            message: "sucessfully Added",
            foodadd
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    foodAdd
})