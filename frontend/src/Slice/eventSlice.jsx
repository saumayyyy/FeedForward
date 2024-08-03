import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    event : null
}

const eventSlice = createSlice({
    name:"event",
    initialState,
    reducers:{
        setEvent: (state, action) => {
            state.event = action.payload
        },
    }
})

export const {
    setEvent,
} = eventSlice.actions

export default eventSlice.reducer