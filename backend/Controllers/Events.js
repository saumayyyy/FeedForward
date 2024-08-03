const {uploadImageToCloudinary} = require("../Utilities/ImageUploader");
const {EventCard }= require("../database/db");
require("dotenv").config()
const {User} = require("../database/db")
const jwt = require("jsonwebtoken");
//create Event->donor specific
const createEvent = async (req, res) => {
  try {
    const { title, typeOfFood, quantity, location, contactDetails, eventDate } = req.body;
    const image = req.files.image;
    const userId = req.user.id;

    // Validation
    if (!title || !typeOfFood || !quantity || !location || !contactDetails || !eventDate) {
      return res.status(400).json({ 
        success:false,
        message: 'All fields are required' 
      });
    }

    if (!['veg', 'non-veg'].includes(typeOfFood)) {
      return res.status(400).json({ 
        success:false,
        message: 'Invalid type of food' });
    }

    if (quantity <= 0) {
      return res.status(400).json({ 
        success:false,
        message: 'Quantity must be a positive number' });
    }

    if (!['Delhi', 'Mumbai', 'Pune', 'Bengaluru', 'Chennai'].includes(location)) {
      return res.status(400).json({ 
        success:false,
        message: 'Invalid location' });
    }
    if (!image) {
      return res.status(400).json({ 
        success:false,
        message: 'Image is required' });
    }
    const donorDetails = await User.findById(userId, {
      role: "Donor",
    })

    if (!donorDetails) {
      return res.status(404).json({
        success: false,
        message: "Donor Details Not Found",
      })
    }
    // Upload image to Cloudinary
    const uploadResult = await uploadImageToCloudinary(image,process.env.FOLDER_NAME);

    // Create new event
    const newEvent =await EventCard.create({
      donorId: donorDetails._id,
      title,
      typeOfFood,
      quantity,
      location,
      contactDetails,
      image: uploadResult.secure_url, // Set image URL from Cloudinary
      eventDate,
    });
    res.status(201).json({ 
      success:true,
      message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success:false,
      message: 'Error creating event', error: error.message });
  }
};

//delete Event->donor Specific
const deleteEvent = async (req, res) => {
    try {
      const { id } = req.params;
  
      const event = await EventCard.findOneAndDelete({ _id: id, donorId: req.user.id });
  
      if (!event) {
        return res.status(404).json({ 
          success:false,
          message: 'Event not found or not authorized' });
      }
  
      res.json({ 
        success:true,
        message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ 
        success:false,
        message: 'Error deleting event', error: error.message });
    }
  };

//Get Event specific to a Donor->donor specific
const getDonorEvents = async (req, res) => {
    try {
      const events = await EventCard.find({ donorId: req.user.id });
      res.json(
        {success:true,
        events});
    } catch (error) {
      res.status(500).json({
        success:false, 
        message: 'Error fetching events', error: error.message });
    }
  };

//Get All Events

const getAllEvents = async (req, res) => {
    try {
      const events = await EventCard.find();
      return res.json(
        {success:true,
        events});
    } catch (error) {
      return res.status(500).json({
        success:false,
        message: 'Error fetching events', error: error.message });
    }
  };

//Get All Events specific to a location
const getEventsByLocation = async (req, res) => {
    try {
      const { location } = req.params;
      const events = await EventCard.find({ location });
      return res.json(
        {success:true,
        events});
    } catch (error) {
      return res.status(500).json({ 
        success:false,
        message: 'Error fetching events', error: error.message });
    }
  };

//mark event status as available or complete
const markEventAsCompleted = async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await EventCard.findById(eventId);
    console.log("Event: ", event); // Debugging log
    if (!event) {
      return res.status(404).json({ 
        success: false,
        message: 'Event not found' 
      });
    }

    if (event.status === 'completed') {
      return res.status(400).json({ 
        success: false,
        message: 'Event already completed' 
      });
    }

    // Update the event status
    event.status = 'completed';
    await event.save();

    // Award points to the donor
    const donor = await User.findById(event.donorId);
    console.log("Donor before update: ", donor); // Debugging log
    donor.totalPoints += 50 * event.quantity;
    await donor.save();
    console.log("Donor after update: ", donor); // Debugging log

    // Award points to the volunteers
    for (let v of event.volunteers) {
      if (v.status === 'accepted') {
        const volunteer = await User.findById(v.volunteerId);
        console.log("Volunteer before update: ", volunteer); // Debugging log
        volunteer.totalPoints += event.quantity * 10;
        await volunteer.save();
        console.log("Volunteer after update: ", volunteer); // Debugging log
      }
    }

    res.json({
      success: true,
      event
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error marking event as completed', 
      error: error.message 
    });
  }
};


const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization?.split(" ")[1];
    let userRole = 'volunteer';

    // Check for token
    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decodedToken.id);

      if (user && user.role === 'donor') {
        userRole = 'donor';
      }
    }

    // Find the event by ID
    let event;
    if (userRole === 'donor') {
      event = await EventCard.findById(id).populate('volunteers.volunteerId', 'name email status');
    } else {
      event = await EventCard.findById(id);
    }

    if (!event) {
      return res.status(404).json({ 
        success: false,
        message: 'Event not found' 
      });
    }

    res.json({
      success: true,
      event,
      userRole
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching event', 
      error: error.message 
    });
  }
};

  module.exports = {
    createEvent,
    deleteEvent,
    getDonorEvents,
    getAllEvents,
    getEventsByLocation,
    markEventAsCompleted,
    getEventById
  };
