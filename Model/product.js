const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema (
    {
        productName : {
            type : String,
            minlength : 5,
            maxlength : 25,
            required : true,
            enum : ['laptop','mobile','television']
        },
        quantity : {
            type : Number,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        description : {
            type : String,
            minlength : 5,
            maxlength : 250,
            required : false
        },
        userQuantity : {
            type : Number,
            required : true
        }
    }
)

//  ippothu mela ulla schema vai vaithu oru model create pannanum

const Product = mongoose.model('Product',productSchema);
module.exports = Product;