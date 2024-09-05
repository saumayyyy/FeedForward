import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../operations/eventApi'; // Adjust the import path as needed
import { formatDate } from '../operations/formatDate';
import { useNavigate } from 'react-router-dom';
import EventsShow from '../Components/EventsShow';

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents(); // Await the API call here
        setEvents(fetchedEvents || []); // Ensure response is an array
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setEvents([]); // Set events to an empty array in case of error
      }
    };
    fetchEvents();
  }, []);

  return (
    <EventsShow events={events} navigate={navigate} donor={false}/>
  );
}

export default Events;
