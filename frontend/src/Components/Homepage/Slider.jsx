import React from "react"
import CTAButton from "./CTAButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import ImageSlider from "./ImageSlider";


const Slider = ({
    position,
    heading,
    subheading,
    ctabtn1,
    ctabtn2,
    img1,
    img2,
    img3,
    img4
  }) => {

    const images = [
        img1,img2,img3,img4
    ];

    return (
      <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>
  
  
        {/* Section 1  */}
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-8 ">
          {heading}
  
          {/* Sub Heading */}
          <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
            {subheading}
          </div>
  
          {/* Button Group */}
          <div className="flex gap-7 mt-7">
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
              <div className="flex items-center gap-2">
                {ctabtn1.btnText}
                <AiOutlineArrowRight />
              </div>
            </CTAButton>
            <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
              {ctabtn2.btnText}
            </CTAButton>
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="shadow-[25px_25px_0px_0px_#f7fafc,0px_0px_40px_0px_#4fd1c5]">
        <ImageSlider images={images}/>
        </div>
      </div>
    );
  };

export default Slider;