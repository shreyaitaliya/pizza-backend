const mongoose = require('mongoose')

const subfoodSchema = mongoose.Schema({
    foodnameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foodName',
    },
    subfood: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
})

let tblName = mongoose.model('subfood', subfoodSchema);
module.exports = tblName;