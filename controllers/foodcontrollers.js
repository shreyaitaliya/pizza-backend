const foodmodel = require('../models/foodModel');

const cloudinary = require('cloudinary').v2

const foodAdd = async (req, res) => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
        let foodadd = await foodmodel.create({
            foodname: req.body.foodname,
            image: result.secure_url
        })
        res.status(201).send({ message: 'Record added successfully', record: foodadd });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error adding record' });
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

const foodDelete = async (req, res) => {
    try {
        let deleteData = await foodmodel.findByIdAndDelete(req.query.id);
        return res.status(200).send({
            success: true,
            message: "food deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const foodUpdate = async (req, res) => {
    try {
        let updateData = await foodmodel.findByIdAndUpdate(req.query.id, {

        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    foodAdd, foodView, foodDelete, foodUpdate
})