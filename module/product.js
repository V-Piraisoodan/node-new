const productModel = require ('../Model/product');

exports.postProduct = async (req,res,next)=>{
    const productData = new productModel({...req.body.product});
    try{
        var response = await productData.save();
        res.send(response);
    }
    catch(err){
        console.log(err);
    }
}