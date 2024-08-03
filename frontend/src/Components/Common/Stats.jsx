import React from "react"

const Stats = [
  { count: "3k", label: "Active Volunteers" },
  { count: "50+", label: "Partner Organizations" },
  { count: "100+", label: "Volunteer Programs" },
  { count: "25+", label: "Community Awards" },
];


const StatsComponent = () => {
  return (
    <div className="bg-richblack-700 h-[100px] flex items-center">
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {
              Stats.map((stat,index)=>(
                
                  <div key={index} className="font-semibold text-[16px] text-richblack-500">
                    <h1 className="text-[30px] font-bold text-richblack-5">
                      {stat.count}
                    </h1>
                    <h2 className="font-semibold text-[16px] text-richblack-500">
                      {stat.label}
                    </h2>
                  </div>
              )
                
              )
          }

        </div>
      </div>
        
      
    </div>
  )
};

export default StatsComponent;