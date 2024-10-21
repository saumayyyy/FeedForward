import {toast} from "react-hot-toast";
import { setLoading,setUser } from "../Slice/profileSlice";
import { apiConnector } from "./apiConnector";
import { profileEndpoints } from "./apis";
import { logout } from "./authApi";


const {GET_USER_DETAILS_API,UPDATE_PROFILE_API} = profileEndpoints;

export function getUserDetails(token,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET",GET_USER_DETAILS_API,{
                Authorization: `Bearer ${token}`,
            })

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            const userImage = response.data.user.image?response.data.user.image:
            `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.name}`
            console.log(user);
            dispatch(setUser({...response.data.user,image:userImage}));
        } catch (e) {
            dispatch(logout(navigate))
            console.log("GET_USER_DETAILS API ERROR............", error)
            toast.error("Could Not Get User Details")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}

export function updateProfile(token,formData){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
              Authorization: `Bearer ${token}`,
            })
            console.log("UPDATE_PROFILE_API API RESPONSE............", response)
      
            if (!response.data.success) {
              throw new Error(response.data.error)
            }
            const userImage = response.data.updatedUserDetails.image
              ? response.data.updatedUserDetails.image
              : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
            dispatch(
              setUser({ ...response.data.updatedUserDetails, image: userImage })
            )
            toast.success("Profile Updated Successfully")
          } catch (error) {
            console.log("UPDATE_PROFILE_API API ERROR............", error)
            toast.error("Could Not Update Profile")
          }
          toast.dismiss(toastId)
    }
}