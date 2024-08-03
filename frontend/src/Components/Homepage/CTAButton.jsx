import React from "react"
import { Link } from "react-router-dom";

const CTAButton = ({children,active,linkto}) => {
  return (
    <div>
        <Link to={linkto}>
            <div className={`text-center text-[16px] px-6 py-3 rounded-md font-bold
            ${active?"bg-pink-200 text-black":"bg-blue-800"}
            hover:scale-95 transition-all duration-200`}>
                {children}
            </div>
        </Link>
      
    </div>
  )
};

export default CTAButton;