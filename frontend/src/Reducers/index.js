import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../Slice/authSlice";
import profileReducer from "../Slice/profileSlice";
import eventReducer from "../Slice/eventSlice";



const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    event: eventReducer
})

export default rootReducer;