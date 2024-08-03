const express = require("express");
const router  =express.Router();
const {createEvent,deleteEvent,getDonorEvents
    ,getAllEvents,getEventsByLocation,
    markEventAsCompleted,getEventById} = require("../Controllers/Events");

const {auth,isDonor} = require("../Middlewares/authorizaton");

router.post("/event/create",auth,isDonor,createEvent);
router.delete("/event/delete/:id",auth,isDonor,deleteEvent);
router.get("/event/donor",auth,isDonor,getDonorEvents);
router.get("/event",getAllEvents);
router.get("/event/location/:location",getEventsByLocation);
router.put("/event/:eventId/status",auth,isDonor,markEventAsCompleted);
router.get("/event/:id", getEventById); // New route for fetching a specific event by ID
module.exports = router;