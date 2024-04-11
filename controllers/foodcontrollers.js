const foodmodel = require('../models/foodModel');

const cloudinary = require('cloudinary').v2;

const foodAdd = async (req, res) => {
    try {
        // dplicate not added
        let duplicate = await foodmodel.findOne({ foodname: req.body.foodname });
        if (duplicate) {
            return res.status(400).send({
                success: false,
                message: "This Food ALready Adeed",
            })
        }
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result.public_id);
        let foodadd = await foodmodel.create({
            foodname: req.body.foodname,
            image: result.secure_url,
            image_public_id: result.public_id
        })
        return res.status(201).send({
            sucess: true,
            message: 'Record added successfully',
            record: foodadd
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Error adding record'
        });
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
        let allimagedata = await foodmodel.findById(req.query.id);
        if (allimagedata.image) {
            let deleteimage = await cloudinary.uploader.destroy(allimagedata.public_id);
        }
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
        let alldata = await foodmodel.findById(req.query.id);
        if (req.file) {
            let result = await cloudinary.uploader.destroy(alldata.image_public_id);

        }
        let newresult = await cloudinary.uploader.upload(req.file.path);
        let updatedata = await foodmodel.findByIdAndUpdate(req.query.id, {
            foodname: req.body.foodname,
            image: newresult.secure_url
        })
        return res.status(200).send({
            success: true,
            message: "Food Update SUcessfully",
            alldata
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    foodAdd, foodView, foodDelete, foodUpdate
})