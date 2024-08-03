const {User,EventCard,Profile} = require("../database/db");

const getUserDetails = async (req, res) => {
    try {
      const userId = req.user.id;
  
      // Find the user and populate the additional details
      const user = await User.findById(userId)
        .populate('additionalDetails')
        .select('-password'); // Exclude password from the response
  
      if (!user) {
        return res.status(404).json({
          success:false,
          message: 'User not found' });
      }
  
      // Find all events created by the user if they are a donor
      const events = await EventCard.find({ donorId: userId });
  
      res.json({ 
        success:true,
        user, 
        events });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        success:false,
        message: 'Error fetching user details', error: error.message });
    }
  };


  const updateProfile = async (req, res) => {
    try {
      const {
        name = "",
        dateOfBirth = "",
        about = "",
        gender = "",
      } = req.body
      const id = req.user.id;
  
      // Find the profile by id
      const userDetails = await User.findById(id)
      const profile = await Profile.findById(userDetails.additionalDetails)
  
      const user = await User.findByIdAndUpdate(id, {
        name,
      })
      await user.save()
  
      // Update the profile fields
      profile.dateOfBirth = dateOfBirth
      profile.about = about
      profile.gender = gender
  
      // Save the updated profile
      await profile.save()
  
      // Find the updated user details
      const updatedUserDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
  
      return res.json({
        success: true,
        message: "Profile updated successfully",
        updatedUserDetails,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }

  module.exports = {updateProfile,getUserDetails}