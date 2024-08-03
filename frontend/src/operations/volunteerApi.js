import { toast } from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { volunteerEndpoints } from "./apis";


export function registerVolunteer(eventId, navigate) {
    return async (dispatch) => {
        console.log("Inside API CAll register")
        const toastId = toast.loading("Loading...");
        try {
            const url = volunteerEndpoints.REGISTER_VOLUNTEER_API.replace(':eventId', eventId);
            const response = await apiConnector("PUT", url);
            console.log("REGISTER VOLUNTEER API RESPONSE....", response);
            if (!response.data.success) {
                throw new Error(response.data.msg);
            }
            toast.success("Registered as Volunteer Successfully");
            navigate("/dashboard/enrolled-events");
        } catch (e) {
            console.log("REGISTER VOLUNTEER API ERROR............", e);
            toast.error("Failed to Register as Volunteer");
        }
        toast.dismiss(toastId);
    };
}


export function unregisterVolunteer(eventId, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const url = volunteerEndpoints.UNREGISTER_VOLUNTEER_API.replace(':eventId', eventId);
            const response = await apiConnector("DELETE", url);
            console.log("UNREGISTER VOLUNTEER API RESPONSE....", response);
            if (!response.data.success) {
                throw new Error(response.data.msg);
            }
            toast.success("Unregistered from Volunteer Successfully");
            navigate("/dashboard/enrolled-events");
        } catch (e) {
            console.log("UNREGISTER VOLUNTEER API ERROR............", e);
            toast.error("Failed to Unregister as Volunteer");
        }
        toast.dismiss(toastId);
    };
}


export function updateVolunteerStatus(volunteerId, eventId, status) {
    return async (dispatch) => {
        console.log("Inside API CAll status update")
        const toastId = toast.loading("Loading...");
        try {
            const url = volunteerEndpoints.UPDATE_VOLUNTEER_STATUS
                .replace(':volunteerId', volunteerId)
                .replace(':eventId', eventId);
            const response = await apiConnector("PUT", url, { status });
            console.log("UPDATE VOLUNTEER STATUS API RESPONSE....", response);
            if (!response.data.success) {
                throw new Error(response.data.msg);
            }
            toast.success("Volunteer Status Updated Successfully");
        } catch (e) {
            console.log("UPDATE VOLUNTEER STATUS API ERROR............", e);
            toast.error("Failed to Update Volunteer Status");
        }
        toast.dismiss(toastId);
    };
}
