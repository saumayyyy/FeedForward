import React, { useEffect, useState } from 'react';
import { formatDate } from '../operations/formatDate';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const EventsShow = ({events,navigate,donor})=>{

    return (
        <div className="p-8 mx-auto min-w-[80%]">
          <div className="text-4xl font-bold text-white mb-6">Events</div>
          {!events ? 
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
              <div className="spinner"></div>
            </div>
           : !events.length ? (
            <p className="grid h-[10vh] w-full place-content-center text-white-500">
              You have not enrolled in any event yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              {/* Headings */}
              <div className={`grid ${donor?"grid-cols-6":"grid-cols-5"} bg-gray-800 text-white rounded-t-lg p-4 border-b-2 border-white bg-richblack-700 mb-6`}>
                <p className="col-span-2 font-semibold">Event Details</p>
                <p className="col-span-1 text-center font-semibold">Event Date</p>
                <p className="col-span-1 text-center font-semibold">Status</p>
                <p className="col-span-1 text-center font-semibold">Creation Date</p>
                {donor && <p className="col-span-1 text-center font-semibold">Actions</p>}
              </div>
              {/* Event Rows */}
              {events.map((event, i) => (
                <div
                  className={`grid ${donor?"grid-cols-6":"grid-cols-5"} items-center rounded-md p-4 hover:bg-gray-100 transition bg-richblack-700 mb-4
                  ${event.status === 'completed' ? 'shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' 
                    : 'shadow-[5px_5px_rgba(255,_255,_150,_0.4),_10px_10px_rgba(255,_255,_150,_0.3),_15px_15px_rgba(255,_255,_150,_0.2),_20px_20px_rgba(255,_255,_150,_0.1),_25px_25px_rgba(255,_255,_150,_0.05)]'}`}
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
                          ? 'bg-caribbeangreen-400 text-white font-semibold'
                          : 'bg-yellow-400 text-white font-semibold px-5'
                      }`}
                    >
                      {event.status === 'completed' ? 'Completed' : 'Available'}
                    </span>
                  </div>
                  <div className="col-span-1 text-center text-white text-sm">
                    {formatDate(event.createdAt)}
                  </div>
                  {donor && <div className="col-span-1 text-center text-white text-sm flex justify-center gap-4">
                  <FaRegEdit />
                  <RiDeleteBin6Line/>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </div>
      );

}
export default EventsShow;
