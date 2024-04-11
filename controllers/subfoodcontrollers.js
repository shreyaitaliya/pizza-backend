const foodModel = require('../models/foodModel');
const subfoodModel = require('../models/subfoodModel');
const cloudinary = require('cloudinary').v2

const subadd = async (req, res) => {
    try {
        let duplicate = await subfoodModel.findOne({ subfood: req.body.subfood });
        if (duplicate) {
            return res.status(400).send({
                sucess: false,
                message: "Food Already Added",
            })
        }
        let imageresult = await cloudinary.uploader.upload(req.file.path);
        // console.log(imageresult);
        let subfoodadd = await subfoodModel.create({
            foodnameId: req.body.foodnameId,
            subfood: req.body.subfood,
            image: imageresult.secure_url,
            price: req.body.price,
            description: req.body.description,
            image_public_id: imageresult.public_id
        })
        return res.status(200).send({
            sucess: true,
            message: 'Subfood Added Sucessfully',
            subfoodadd
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const subView = async (req, res) => {
    try {
        let viewcategory = await subfoodModel.find({}).populate('foodnameId');
        return res.status(200).send({
            sucess: true,
            message: "All SubFood Category Viewed Sucessfully",
            viewcategory
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    subadd, subView
})