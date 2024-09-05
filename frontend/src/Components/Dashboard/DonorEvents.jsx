import React, { useEffect, useState } from 'react';
import { getDonorEvents } from '../../operations/eventApi'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';
import EventsShow from '../EventsShow';

const DonorEvents = () => {
  const [events, setEvents] = useState([]);
  const token = JSON.parse(localStorage.getItem("token")); // Ensure token is available
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getDonorEvents(token); // Await the API call here
        setEvents(fetchedEvents || []); // Ensure response is an array
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setEvents([]); // Set events to an empty array in case of error
      }
    };
    fetchEvents();
  }, [token]);


  return (
    <EventsShow events = {events} navigate={navigate} donor={true}/>
  );
}

export default DonorEvents;
