const express = require("express");
const router  = express.Router();
const {registerVolunteer,unregisterVolunteer,updateVolunteerStatus,getVolunteerEvents} = require("../Controllers/Volunteer");

const {auth,isDonor,isVolunteer} = require("../Middlewares/authorizaton");

router.put("/event/:eventId/volunteers/register",auth,isVolunteer,registerVolunteer);
router.delete("/event/volunteers/unregister/:eventId",auth,isVolunteer,unregisterVolunteer);
router.put("/event/volunteers/:volunteerId/status/:eventId",auth,isDonor,updateVolunteerStatus);
router.get("/volunteer/events",auth,getVolunteerEvents);
module.exports = router;