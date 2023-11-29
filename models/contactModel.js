const mongoose=require("mongoose");
const contactschema=mongoose.Schema({
    name: {
        type:String,
        require:[true,"please add contact name"],
    },
    phone:{
        type:String,
        require:[true,"please add contact phone number"],

    },
    address:{
        type:String,
        require:[true,"please add contact address"],

    }

});

module.exports=mongoose.model("Contact",contactschema);