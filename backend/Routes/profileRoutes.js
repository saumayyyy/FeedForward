const express = require("express");
const router  =express.Router();
const {auth} = require("../Middlewares/authorizaton")
const {getUserDetails,updateProfile} = require("../Controllers/UserDetails");


router.get("/getUserDetails",auth,getUserDetails);
router.put("/updateProfile",auth,updateProfile);

module.exports = router;