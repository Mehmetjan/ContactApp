// use asyc-handler to handle try catch
const asyncHandler= require("express-async-handler");
const Contact=require("../models/contactModel");

//@desc get all the contacts
//@route get /api/contacts
//@access public

const getcontacts =asyncHandler( async(req,res)=>{
    const contacts=await Contact.find();
    if(!contact){
        res.status(400);
        throw new Error("contact not found");
    }
    res.status(200).json({contacts});
});

//@desc create new contacts
//@route post /api/contacts
//@access public


const createcontacts = asyncHandler(async(req,res)=>{
    console.log("request body:",req.body)
        const {name, phone,address}=req.body;
    if(!name,!phone,!address){
        res.status(400);
        throw new Error("all fiels are needed");
    }
    const contact= await Contact.create({
        name, phone, address
    });
    res.status(201).json(contact);
})

//@desc update the contacts
//@route put /api/contacts/:id
//@access public

const updatecontact = asyncHandler(async(req,res)=>{
    res.status(200).json({msg:`Updated contact for ${req.params.id}`});
});

//@desc get a contact
//@route get /api/contacts/:id
//@access public

const getcontact=asyncHandler(async(req,res)=>{
    res.status(200).json({msg:`Contact for ${req.params.id}`});
})

//@desc delete the contacts
//@route delete /api/contacts/:id
//@access public
const deletecontact =asyncHandler(async(req,res)=>{
    res.status(200).json({msg:`Deleted contact for ${req.params.id}`});
})


module.exports={getcontacts,createcontacts,updatecontact,getcontact,deletecontact};