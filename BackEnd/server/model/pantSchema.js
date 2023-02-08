const mongoose = require('mongoose');

const pantSchema = new mongoose.Schema({
    title : {
    type : String,
    required : true
    },
    image : {
        type : String,
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

const Pant = mongoose.model("PANT",pantSchema);



module.exports = Pant;