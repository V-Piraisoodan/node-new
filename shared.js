const {MongoClient} = require("mongodb");

module.exports = {
    selectedDb : {},
    async connect()
    {
        try{
            const client = await MongoClient.connect(process.env.MONGO_DB);
            this.selectedDb = client.db('node_new');
            console.log(this.selectedDb,'hello');
        }
        catch(err){
            console.log(err)
        }
    }
}