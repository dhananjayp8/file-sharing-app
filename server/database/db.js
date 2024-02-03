import mongoose from "mongoose";

const DBConnection=async()=>{
    const MONGODB_URL=`mongodb://dhananjaypuranik8:<Dsp@5928>@ac-percs28-shard-00-00.4utjnq0.mongodb.net:27017,ac-percs28-shard-00-01.4utjnq0.mongodb.net:27017,ac-percs28-shard-00-02.4utjnq0.mongodb.net:27017/?ssl=true&replicaSet=atlas-texmey-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('Database connected successfully');

    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}
export default DBConnection;