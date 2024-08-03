const jwt = require("jsonwebtoken");
require("dotenv").config()
const {User} = require("../database/db")

//authorization
async function auth(req,res,next){
    try {
       //extract token 
       const token =  req.header("Authorization").replace("Bearer ","")
       || req.body.token 
       || req.cookies.token;

       if(!token){
        return res.status(401).json({
            success:false,
            message:'Token is Missing',
        });
       }
       //verify the token
       try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode; 
       } catch (error) {
        console.log(error)
            return res.status(401).json({
                success:false,
                message:'Invalid token',
            });
       }
       next();
        
    } catch (e) {
        console.log(e);
        return res.status(401).json({
            success:false,
            message:'Some error occured',
        });
    }
}

//isdonor
async function isDonor(req,res,next){
    try {
        if(req.user.role!=="donor"){
            return res.status(401).json({
                success:false,
                message:'Only Donor can access this Route',
            });
        }
        next();
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            success:false,
            message:'Role not verified,some error occured',
        });
    }
}


//isVolunteer
async function isVolunteer(req,res,next){
    try {
        if(req.user.role!=="volunteer"){
            return res.status(401).json({
                success:false,
                message:'Only Volunteer can access this Route',
            });
        }
        next();
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            success:false,
            message:'Role not verified,some error occured',
        });
    }
}

//isAdmin
async function isAdmin(req,res,next){
    try {
        if(req.user.role!=="Admin"){
            return res.status(401).json({
                success:false,
                message:'Only Admin can access this Route',
            });
        }
        next();
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            success:false,
            message:'Role not verified,some error occured',
        });
    }
}

module.exports = {auth,isAdmin,isDonor,isVolunteer};