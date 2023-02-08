const mongoose = require('mongoose');

const shirtSchema = new mongoose.Schema({
    title : {
    type : String,
    required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    quantity : {
        type : String , 
        required : true
    }
})

const Shirt = mongoose.model("SHIRT",shirtSchema);



module.exports = Shirt;