const express=require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB=require("./config/dbConnection");

const env= require("dotenv").config();
const app = express();
connectDB();


const port =process.env.port;


app.use(express.json());
app.use("/api/contacts",require("./router/contacts"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`console is running on port ${port}`);
})
