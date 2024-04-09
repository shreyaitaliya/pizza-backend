const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    foodname: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    image_public_id: {
        type: String,
        require: true
    }

})

let tblName = mongoose.model('foodName', foodSchema);
module.exports = tblName;