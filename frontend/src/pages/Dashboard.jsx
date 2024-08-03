import React from "react"
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar"


const Dashboard = () => {

    const {loading:authLoading} = useSelector((state)=>state.auth);
    const{loading:profileLoading} = useSelector((state)=>state.profile);


    if(profileLoading||authLoading){
        return (
            <div className="mt-10">
                Loading...
            </div>
        )
    }
  return (
    <div className="relative flex">
        <Sidebar className="ml-10"/>
        <div className="min-h-[calc(100vh-3.5rem)] mx-auto ">
            <div className="mx-auto w-11/12 py-10 min-w-[1000px]">
                <Outlet/>
            </div>
        
        </div>
      
    </div>
  )
};

export default Dashboard;