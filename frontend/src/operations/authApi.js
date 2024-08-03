import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../Slice/authSlice"
import { setUser } from "../Slice/profileSlice"
import { apiConnector } from "./apiConnector"
import { endpoints } from "./apis"


const {
    SIGNUP_API,
    LOGIN_API
} = endpoints;


export function signUp(
    
    name,
    email,
    password,
    confirmPassword,
    phone,
    role, 
    navigate
){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true))
        try{
            console.log("Sending signup request with data:", {
                role,
                name,
                email,
                password,
                confirmPassword,
                phone,
              });
            const response = await apiConnector("POST",SIGNUP_API,{
                role,
                name,
                email,
                password,
                confirmPassword,
                phone,
            })
            console.log("SIGNUP API RESPONSE....",response)
            if(!response.data.success){
                throw new Error(response.data.msg)
            }
            toast.success("Signup Successfull");
            navigate("/login")
        }catch(e){
            console.log("SIGNUP API ERROR............", e)
            toast.error("Signup Failed")
            navigate("/signup")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function login(email,password,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST",LOGIN_API,{
                email,
                password,
            })
            console.log("LOGIN API RESPONSE............", response)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Login Successful")
            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.name}`
            dispatch(setUser({ ...response.data.user, image: userImage }))
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard/my-profile")
        } catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error("Login Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)      
    }
}


export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }