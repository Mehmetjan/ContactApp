const mongoose=require("mongoose");
const connectDB=async()=>{
  try{
    const connect=await mongoose.connect(process.env.connection_string);
    console.log("database is connected: ",
    connect.connection.host,
    connect.connection.name
    );

  }catch(err){
    console.log(err);
    process.exit(1);
  }
};

module.exports=connectDB;
