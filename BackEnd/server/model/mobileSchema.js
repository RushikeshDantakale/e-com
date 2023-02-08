const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
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
    },
    ram : {
        type : String,
        required : true
    },
    frontCamera : {
        type : String
    },
    backCamera : {
        type : String
    },
    Rom : {
        type : String,
        required : true
    }
})

const Mobile = mongoose.model("MOBILE",mobileSchema);



module.exports = Mobile;