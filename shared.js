const {MongoClient} = require("mongodb");
const mongoose = require('mongoose');

module.exports = {
    selectedDb : {},
    async connect()
    {
        try{
            const client = await MongoClient.connect(process.env.MONGO_DB);
            this.selectedDb = client.db('node_new');
            // console.log(this.selectedDb,'hello');
        }
        catch(err){
            console.log(err)
        }
    },
    
    async connectMongoose(){
        try{
            await mongoose.connect(process.env.MONGOOSE_CONNECTION_URL);
            console.log("connection success");
        }
        catch(err){
            console.log(err);
        }
    }
}