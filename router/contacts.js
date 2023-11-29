const express = require("express");
const router=express.Router();
const {getcontacts,createcontacts,updatecontact,getcontact,deletecontact}=require("../controllers/contactController");

router.route("/").get(getcontacts);


router.route("/").post(createcontacts);

router.route("/:id").put(updatecontact);

router.route("/:id").get(getcontact);


router.route("/:id").delete(deletecontact);

    module.exports=router;
