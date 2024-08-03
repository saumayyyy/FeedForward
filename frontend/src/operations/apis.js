const BASE_URL = "https://feedforward-backend.onrender.com/api/v1";

//AUTH endpoints
export const endpoints = {
    SIGNUP_API: BASE_URL+"/signup",
    LOGIN_API: BASE_URL+"/login",
}


export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL+"/profile/getUserDetails",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
}


export const eventEndpoints = {
    CREATE_COURSE_API : BASE_URL+"/event/create",
    DELETE_EVENT_API : BASE_URL+"/event/delete/:id",
    GET_DONOR_EVENTS_API : BASE_URL+"/event/donor",
    GET_LOCATION_EVENTS_API: BASE_URL+"/event/location/:location",
    GET_ALL_EVENTS_API : BASE_URL+"/event",
    MARK_EVENT_COMPLETED_API: BASE_URL+"/event",
    GET_EVENT_BY_ID_API: BASE_URL+"/event"
}


export const volunteerEndpoints = {
    REGISTER_VOLUNTEER_API : BASE_URL+"/event/:eventId/volunteers/register",
    UNREGISTER_VOLUNTEER_API : BASE_URL+"/event/volunteers/unregister/:eventId",
    UPDATE_VOLUNTEER_STATUS : BASE_URL+"/event/volunteers/:volunteerId/status/:eventId",
    GET_VOLUNTEER_EVENTS : BASE_URL+"/volunteer/events"
}

