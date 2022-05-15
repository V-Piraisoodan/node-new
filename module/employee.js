const { ObjectId } = require("mongodb");
const mongo = require("../shared");

module.exports.getEmployees = async (req,res,next)=>{
    try{
        const data = await mongo.selectedDb.collection('employee').find().toArray();
        // console.log(await mongo.selectedDb.collection('movies').find());
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.createEmployees = async (req,res,next)=>{
    try{
        const mongoResponse = await mongo.selectedDb.collection('employee').insertOne(req.body);
        res.send(mongoResponse);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.updateEmployees = async (req,res,next)=>{
    try{
        const mongoResponse = await mongo.selectedDb.collection('employee').updateOne(
            {_id : ObjectId(req.params.employeeId) },
            {$set : {...req.body}}
            );
        res.send(mongoResponse);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.findAndUpdateEmployees = async (req,res,next)=>{
    try{
        const mongoResponse = await mongo.selectedDb.collection('employee').findOneAndUpdate(
            {_id : ObjectId(req.params.employeeId) },
            {$set : {...req.body}},
            // {returnNewDocument : true}
            );
        res.send(mongoResponse);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.deleteEmployees = async (req,res,next)=>{
    try{
        const mongoResponse = await mongo.selectedDb.collection('employee').remove({_id : ObjectId(req.params.employeeId)});
        res.send(mongoResponse);
    }
    catch(err){
        console.log(err);
    }
}