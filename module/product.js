const productModel = require ('../Model/product');

exports.createProduct = async (req,res,next)=>{
    const productData = new productModel({...req.body.product});
    try{
        var response = await productData.save();
        res.send(response);
    }
    catch(err){
        console.log(err);
    }
}

exports.getProducts = async (req,res,next)=>{
    try{
        var products = await productModel.find();
        res.send(products);
    }
    catch(err){
        console.log(err);
    }
}

exports.updateProducts = async (req,res,next)=>{
    try{
        var response = await productModel.findOneAndUpdate({_id:req.params.productId},{...req.body.product},{runValidators : true,new : true});
        res.send(response);
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteProducts = async (req,res,next)=>{
    try{
        var response = await productModel.findByIdAndRemove(req.params.productId);
        res.send(response);
    }
    catch(err){
        console.log(err);
    }
}