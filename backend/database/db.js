const mongoose = require("mongoose");
require("dotenv").config();

const {DB_URL} = process.env;



mongoose.connect(DB_URL)
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.error("Database connection error: ", err));
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: { 
    type: String,
    required: true,
    minlength: 6
  },
  phone: {
    type: String,
    required: true,
    minlength: 10
  },
  role: {
    type: String,
    enum: ['donor', 'volunteer'], // Removed 'collector' role
    default: 'donor'
  }, 
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  image:{
    type:String,
    required:true
  },
  totalPoints: {
    type: Number,
    default: 0
  }
});
  const eventCardSchema = new mongoose.Schema({
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    typeOfFood: {
      type: String,
      enum: ['veg', 'non-veg'],
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    location: {
        type: String,
        enum: ['Delhi', 'Mumbai', 'Pune','Bengaluru','Chennai'],
        required: true // Assuming address is required for location
    },
    contactDetails: {
        type: String,
        required: true
    },
    status: {
      type: String,
      enum: ['available', 'completed'],
      default: 'available'
    },
    volunteers: [{
      volunteerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      status: {
        type: String,
        enum: ['accepted', 'rejected', 'pending'],
        default: 'pending'
      }
    }],
    image:{
      type:String,
      required:true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    eventDate: {
      type: Date,
      required: true // Assuming eventDate is required for the event
    }
  });

  const profileSchema = new mongoose.Schema({
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    about: {
      type: String,
      trim: true,
    },
  });
  
  // Export the Profile model
 const Profile = mongoose.model("Profile", profileSchema);
  const EventCard = mongoose.model('EventCard', eventCardSchema);
  const User = mongoose.model('User', userSchema);
  module.exports = {EventCard,User,Profile};