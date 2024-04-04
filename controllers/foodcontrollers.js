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

const foodView = async (req, res) => {
    try {
        let dataView = await foodmodel.find({})
        return res.status(200).send({
            success: true,
            message: "Category Successfully Viewed",
            dataView
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    foodAdd, foodView
})