import { volunteerEndpoints } from "./apis";
import { toast } from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { eventEndpoints } from "./apis";

export const getVolunteerEvents = async (token) => {
  const toastId = toast.loading("Loading...");
  let events = [];
  try {
    const response = await apiConnector("GET", volunteerEndpoints.GET_VOLUNTEER_EVENTS, null, {
      Authorization: `Bearer ${token}`,
    });
    console.log("GET VOLUNTEER EVENTS API RESPONSE....", response);
    if (!response.data.success) {
      throw new Error(response.data.msg);
    }
    events = response.data.events;
  } catch (e) {
    console.log("GET VOLUNTEER EVENTS API ERROR............", e);
    toast.error("Failed to Fetch Volunteer Events");
  }
  toast.dismiss(toastId);
  return events;
};


export const getDonorEvents = async(token)=>{
  const toastId = toast.loading("Loading...");
    let events = [];
    try {
        const response = await apiConnector("GET", eventEndpoints.GET_DONOR_EVENTS_API, null, {
            Authorization: `Bearer ${token}`,
        });
        console.log("GET DONOR EVENTS API RESPONSE....", response);
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        events = response.data.events;
        toast.success("Fetched Donor Events Successfully");
    } catch (e) {
        console.log("GET DONOR EVENTS API ERROR............", e);
        toast.error("Failed to Fetch Donor Events");
    }
    toast.dismiss(toastId);
    return events;
}


export const getAllEvents = async ()=>{
  const toastId = toast.loading("Loading....")
  let result = [];
  try {
    const response = await apiConnector("GET",eventEndpoints.GET_ALL_EVENTS_API)
    if(!response?.data?.success){
      throw new Error("Could not fetch Events")
    }
    result = response?.data?.events
  } catch (e) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const createEvent = async (data,token)=>{
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST",eventEndpoints.CREATE_COURSE_API,data,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE Event API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details")
    }
    toast.success("Event Details Added Successfully")
    result = response?.data?.event
  } catch (error) {
    console.log("CREATE Event API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const deleteEvent = async(id,token)=>{
  const toastId = toast.loading("Deleting...");
  let success = false;
  try {
    const response = await apiConnector("DELETE",eventEndpoints.DELETE_EVENT_API.replace(":id",id),
    null,{Authorization: `Bearer ${token}`,})

    console.log("DELETE EVENT API RESPONSE....", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Event deleted successfully");
    success = true;
    
  } catch (e) {
    console.log("DELETE EVENT API ERROR............", error);
    toast.error("Failed to delete event");
  }
  toast.dismiss(toastId);
  return success;
}


export const markEventCompleted = async (id, token) => {
  const toastId = toast.loading("Updating event status...");
  let success = false;

  try {
    const response = await apiConnector("PUT", `${eventEndpoints.MARK_EVENT_COMPLETED_API}/${id}/status`, null, {
      Authorization: `Bearer ${token}`,
    });

    console.log("MARK EVENT COMPLETED API RESPONSE....", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Event marked as completed successfully");
    success = true;
  } catch (error) {
    console.log("MARK EVENT COMPLETED API ERROR............", error);
    toast.error("Failed to mark event as completed");
  }

  toast.dismiss(toastId);
  return success;
};

export const getEventById = async (id, token) => {
  const toastId = toast.loading("Loading event details...");
  let event = null;
  let userRole = 'volunteer';

  try {
    const response = await apiConnector("GET", `${eventEndpoints.GET_EVENT_BY_ID_API}/${id}`, null, {
      Authorization: `Bearer ${token}`,
    });

    console.log("GET EVENT BY ID API RESPONSE....", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    event = response.data.event;
    userRole = response.data.userRole;
    toast.success("Event details loaded successfully");
  } catch (error) {
    console.log("GET EVENT BY ID API ERROR............", error);
    toast.error("Failed to load event details");
  }

  toast.dismiss(toastId);
  return { event, userRole };
};