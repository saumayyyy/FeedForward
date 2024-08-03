const {EventCard} = require('../database/db');

// Accept or Reject Volunteer (Donor Specific)
const updateVolunteerStatus = async (req, res) => {
  try {
    const { eventId, volunteerId } = req.params;
    const { status } = req.body; // status can be 'accepted' or 'rejected'
    console.log("Inside Update volunteer status")

    if (!['accepted', 'rejected'].includes(status)) {
      return res.status(400).json({ 
        success:false,
        message: 'Invalid status value' });
    }

    const event = await EventCard.findById(eventId);
    if (!event) {
      return res.status(404).json({ 
        success:false,
        message: 'Event not found' });
    }

    if (event.donorId.toString() !== req.user.id) {
      return res.status(403).json({ 
        success:false,
        message: 'Not authorized' });
    }

    const volunteer = event.volunteers.find(v => v.volunteerId.toString() === volunteerId);
    if (!volunteer) {
      return res.status(404).json({ 
        success:false,
        message: 'Volunteer not found' });
    }

    volunteer.status = status;
    await event.save();
    res.json(
      {success:true,
      event});
  } catch (error) {
    res.status(500).json({ 
      success:false,
      message: 'Error updating volunteer status', error: error.message });
  }
};

// Register Volunteer for Event
const registerVolunteer = async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await EventCard.findById(eventId);
    if (!event) {
      return res.status(404).json({ 
        success:false,
        message: 'Event not found' });
    }

    // Check if the user is already a volunteer
    const volunteer = event.volunteers.find(v => v.volunteerId.toString() === req.user.id);
    if (volunteer) {
      if (volunteer.status === 'accepted') {
        return res.status(400).json({ 
          success:false,
          message: 'Cannot register/unregister once accepted' });
      }
      return res.status(400).json({ 
        success:false,
        message: 'Already registered as a volunteer' });
    }

    event.volunteers.push({ volunteerId: req.user.id, status: 'pending' });
    await event.save();
    res.json(
      {success:true,
      event});
  } catch (error) {
    res.status(500).json({ 
      success:false,
      message: 'Error registering volunteer', error: error.message });
  }
};
// Unregister Volunteer from Event
const unregisterVolunteer = async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await EventCard.findById(eventId);
    if (!event) {
      return res.status(404).json({ 
        success:false,
        message: 'Event not found' });
    }

    const volunteerIndex = event.volunteers.findIndex(v => v.volunteerId.toString() === req.user.id);
    if (volunteerIndex === -1) {
      return res.status(404).json({ 
        success:false,
        message: 'Not registered as a volunteer' });
    }

    // Check if the volunteer status is 'accepted'
    if (event.volunteers[volunteerIndex].status === 'accepted') {
      return res.status(400).json({ 
        success:false,
        message: 'Cannot unregister once accepted' });
    }

    event.volunteers.splice(volunteerIndex, 1);
    await event.save();
    res.json(
      {success:true,
      event});
  } catch (error) {
    res.status(500).json({ 
      success:false,
      message: 'Error unregistering volunteer', error: error.message });
  }
};


const getVolunteerEvents = async (req, res) => {
  try {
    const volunteerId = req.user.id;

    // Find events where the volunteer is registered
    const events = await EventCard.find({ 
      "volunteers.volunteerId": volunteerId 
    });

    // Map the results to include the entire event object and the volunteer's status
    const eventsWithVolunteerStatus = events.map((event) => {
      const volunteerDetails = event.volunteers.find(v => v.volunteerId.toString() === volunteerId);
      return {
        ...event._doc, // Spread the entire event object
        volunteerStatus: volunteerDetails ? volunteerDetails.status : null,
      };
    });

    res.json({
      success: true,
      events: eventsWithVolunteerStatus
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching volunteer events',
      error: error.message
    });
  }
};




module.exports = { updateVolunteerStatus, registerVolunteer, unregisterVolunteer ,getVolunteerEvents};