import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import OpenRoute from "./Components/Auth/OpenRoute"
import { Toaster } from "react-hot-toast";
import Error from "./pages/Error"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./Components/Dashboard/MyProfile";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Settings from "./Components/Dashboard/Settings/Index"
import VolunteerEvents from "./Components/Dashboard/VolunteerEvents";
import DonorEvents from "./Components/Dashboard/DonorEvents";
import AddEvent from "./Components/Dashboard/AddEvent/addEvent";
import Events from "./pages/Events"
import EventDetails from "./pages/EventDetails"

function App(){

    return(
        <div className="w-screen min-h-screen bg-black flex flex-col font-inter overflow-x-hidden">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/signup" 
                element={
                    <OpenRoute>
                        <Signup/>
                    </OpenRoute>
                }/>
                <Route path="/login" 
                element={
                    <OpenRoute>
                        <Login/>
                    </OpenRoute>
                }/>

                <Route path="/about" 
                element={
                        <About/>

                }/>

                <Route path="/contact" 
                element={
                        <ContactUs/>

                }/>
                <Route path="/event" 
                element={
                        <Events/>

                }/>
                <Route path="/event/:id" 
                element={
                    <PrivateRoute>
                        <EventDetails/>
                    </PrivateRoute>
                }/>

                <Route
                element={
                    <PrivateRoute>
                    <Dashboard/>
                    </PrivateRoute>
                }>

                <Route path="dashboard/my-profile"
                element={
                    <MyProfile/>}/> 

                <Route path="dashboard/my-profile" element={<MyProfile/>}/> 
                <Route path="dashboard/Settings" element={<Settings />} />
                <Route path="dashboard/enrolled-events" element={<VolunteerEvents/>}/>
                <Route path="dashboard/my-events" element={<DonorEvents/>}/>
                <Route path="dashboard/add-event" element={<AddEvent/>}/>
                <Route path="*" element={<Error/>}/>

                </Route>

                <Route path="*"
                    element={<Error/>}/>

            </Routes>
            <Toaster/>
        </div>
    )
}
export default App;