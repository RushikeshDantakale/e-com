const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    product_name : {
    type : String,
    required : true
    },
    src : {
        type : String , 
        required : true
    }
})

const Category = mongoose.model("catagory",categorySchema);



module.exports = Category;