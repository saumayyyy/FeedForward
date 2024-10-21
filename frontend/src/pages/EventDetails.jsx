import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById, markEventCompleted } from '../operations/eventApi';
import { formatDate } from "../operations/formatDate";
import HighlightText from "../Components/Homepage/HighlightText"
import { registerVolunteer, unregisterVolunteer, updateVolunteerStatus } from "../operations/volunteerApi";
import { useDispatch } from 'react-redux';
import { getUserDetails } from '../operations/profileAPI';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [userRole, setUserRole] = useState('volunteer');
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvent = async () => {
      const { event, userRole } = await getEventById(id, token);
      setEvent(event);
      setUserRole(userRole);
    };
    fetchEvent();
  }, [id, token]);

  const handleRegister = async () => {
    dispatch(registerVolunteer(id, navigate));
  };

  const handleUnregister = async () => {
    dispatch(unregisterVolunteer(id, navigate));
  };

  const handleVolunteerStatusChange = async (volunteerId, status) => {
    console.log("Updating Status")
    dispatch(updateVolunteerStatus(volunteerId, id, status));
    setEvent(prevEvent => {
      const updatedVolunteers = prevEvent.volunteers.map(volunteer =>
        volunteer.volunteerId._id === volunteerId ? { ...volunteer, status } : volunteer
      );
      return { ...prevEvent, volunteers: updatedVolunteers };
    });
  };

  const handleMarkAsCompleted = async () => {
    const success = await markEventCompleted(id, token);
    if (success) {
      const { event } = await getEventById(id, token);
      setEvent(event);
      const { user } =await getUserDetails(token,navigate);
      console.log(user);
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-10/12 mx-auto p-8 bg-richblack-700 text-white flex flex-col items-center mt-10">
      <div className='text-4xl pb-5 uppercase'><HighlightText text={event.title} /></div>
      <img src={event.image} alt="event_img" className="h-96 rounded-lg object-cover mb-16 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-10" />
      <div className="mb-6 flex w-full justify-evenly text-richblack-25 text-xl">
        <div>
          <p className="mb-2"><span className="font-bold">Type of Food:</span> {event.typeOfFood}</p>
          <p className="mb-2"><span className="font-bold">Location:</span> {event.location}</p>
        </div>
        <div>
          <p className="mb-2"><span className="font-bold">Quantity:</span> {event.quantity}</p>
          <p className="mb-2"><span className="font-bold">Contact:</span> {event.contactDetails}</p>
        </div>
        <div>
          <p className="mb-2"><span className="font-bold">Event Date:</span> {formatDate(event.eventDate)}</p>
          <p className="mb-2"><span className="font-bold">Status:</span> {event.status}</p>
        </div>
      </div>

      {userRole === 'volunteer' && (
        <div className="mb-6">
          {event.volunteers.some(v => v.volunteerId._id === token.userId && v.status === 'accepted') ? (
            <p className="text-caribbeangreen-300 text-xl font-bold uppercase">You are accepted for this event.</p>
          ) : (
            <div className="flex space-x-4 ">
              <button className="bg-caribbeangreen-500 text-white py-4 px-8 rounded text-2xl font-bold" onClick={handleRegister}>
                Register
              </button>
              <button className="bg-pink-600 text-white py-4 px-8 rounded text-2xl font-bold" onClick={handleUnregister}>
                Unregister
              </button>
            </div>
          )}
        </div>
      )}

      {userRole === 'donor' && (
        <div className="mb-6 w-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Volunteers</h2>
          <div className="space-y-4 w-full bg-richblack-800">
            {event.volunteers.map(volunteer => (
              <div key={volunteer.volunteerId._id} className="flex items-center justify-between p-4 border-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <div>
                  <p className="font-semibold text-xl">{volunteer.volunteerId.name}</p>
                  <p className="text-lg text-richblack-100 font-medium">{volunteer.volunteerId.email}</p>
                </div>
                {volunteer.status === 'accepted' || volunteer.status === 'rejected' ? (
                  <p className={`${volunteer.status === 'accepted' ? 'text-caribbeangreen-100' : 'text-pink-200'} font-semibold text-2xl uppercase`}>
                    {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                  </p>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      className="bg-caribbeangreen-400 text-white py-2 px-4 rounded hover:scale-105"
                      onClick={() => handleVolunteerStatusChange(volunteer.volunteerId._id, 'accepted')}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-pink-500 text-white py-2 px-4 rounded hover:scale-105"
                      onClick={() => handleVolunteerStatusChange(volunteer.volunteerId._id, 'rejected')}
                    >
                      Disapprove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {event.status !== 'completed' && (
            <button className="bg-pink-300 text-black py-2 px-4 rounded mt-4 font-semibold hover:scale-110 text-2xl" onClick={handleMarkAsCompleted}>
              Mark as Completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EventDetails;

