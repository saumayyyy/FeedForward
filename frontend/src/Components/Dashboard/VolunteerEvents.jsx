import React, { useEffect, useState } from 'react';
import { getVolunteerEvents } from '../../operations/eventApi'; // Adjust the import path as needed
import { formatDate } from '../../operations/formatDate';
import { useNavigate } from 'react-router-dom';

const VolunteerEvents = () => {
  const [events, setEvents] = useState([]);
  const token = JSON.parse(localStorage.getItem("token")); // Ensure token is available
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getVolunteerEvents(token); // Await the API call here
        setEvents(fetchedEvents || []); // Ensure response is an array
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setEvents([]); // Set events to an empty array in case of error
      }
    };

    fetchEvents();
  }, [token]);

  return (
    <div className="p-8">
      <div className="text-4xl font-bold text-white mb-6">Enrolled Events</div>
      {!events ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !events.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-white-500">
          You have not enrolled in any event yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="overflow-x-auto">
          {/* Headings */}
          <div className="grid grid-cols-5 bg-gray-800 text-white rounded-t-lg p-4 border-b-2 border-white">
            <p className="col-span-2 font-semibold">Event Details</p>
            <p className="col-span-1 text-center font-semibold">Event Date</p>
            <p className="col-span-1 text-center font-semibold">Status</p>
            <p className="col-span-1 text-center font-semibold">Creation Date</p>
          </div>
          {/* Event Rows */}
          {events.map((event, i) => (
            <div
              className={`grid grid-cols-5 items-center border-b border-white p-4 hover:bg-gray-100 transition`}
              key={i}
            >
              <div
                className="col-span-2 flex cursor-pointer items-center gap-4"
                onClick={() => {
                  navigate(`/event/${event._id}`);
                }}
              >
                <img
                  src={event.image}
                  alt="event_img"
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg text-white">{event.title}</p>
                  <p className="text-sm text-white">Type of Food: {event.typeOfFood}</p>
                  <p className="text-sm text-white">Location: {event.location}</p>
                  <p className="text-sm text-white">Quantity: {event.quantity}</p>
                  <p className="text-sm text-white">Contact: {event.contactDetails}</p>
                </div>
              </div>
              <div className="col-span-1 text-center text-white text-sm">
                {formatDate(event.eventDate)}
              </div>
              <div className="col-span-1 text-center text-sm">
                <span
                  className={`px-3 py-4 text-[15px] rounded-full ${
                    event.status === 'completed'
                      ? 'bg-caribbeangreen-200 text-caribbeangreen-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {event.status === 'completed' ? 'Completed' : 'Available'}
                </span>
              </div>
              <div className="col-span-1 text-center text-white text-sm">
                {formatDate(event.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VolunteerEvents;
