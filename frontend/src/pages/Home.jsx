import React from "react"
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link } from "react-router-dom";
import HighlightText from "../Components/Homepage/HighlightText";
import CTAButton from "../Components/Homepage/CTAButton";
import Banner from "../assets/Video.mp4";
import Slider from "../Components/Homepage/Slider";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/images7.jpeg";
import image8 from "../assets/image8.png";
import HowWeWork from "../Components/Homepage/HowWeWork";
import Footer from "../Components/Common/Footer";

function Home(){
    return (
        <div>
            {/* {section-1} */}
            <div className="relative mx-auto flex flex-col w-11/12 items-center text-white
            justify-between max-w-maxContent gap-8">
                <Link to={"/signup"}>
                    <div className=" group mt-16 p-1 mx-auto rounded-full bg-blue-800 font-bold text-richblack-200
                    transition=all duration-200 hover:scale-95 ">
                        <div className="flex items-center gap-2 rounded-full px-10 py-[5px] transition=all duration-200
                        group-hover:bg-richblack-900">
                            <p>Become an Donor</p>
                            <AiOutlineArrowRight/>
                            
                        </div>
                    </div>
                </Link>

                <div className="text-center text-4xl font-semibold mt-3">
                    Make a Difference by 
                    <HighlightText text={"Sharing Excess Food"}/>
                </div>
                <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4">
                Our platform connects donors with excess food to those in need, allowing you to create donation events from anywhere. Easily set up an event, manage contributions, and receive support from a community of volunteers eager to help distribute food to those who need it most.
                </div>

                <div className="flex gap-7 mt-3">
                    <CTAButton active={true} linkto={"/about"}>Learn More</CTAButton>
                    <CTAButton active={false} linkto={"/login"}>Create Impact</CTAButton>
                </div>

                <div className="w-[80%] mx-3 my-12 flex justify-center items-center
                    shadow-[25px_25px_0px_0px_#f7fafc,0px_0px_40px_0px_#4fd1c5]">
                        <video muted loop autoPlay className="">
                            <source src={Banner} type="video/mp4"/>
                        </video>
                </div>
                <HowWeWork/>

                {/* {code section 1} */}
                <div>
                    <Slider
                    position={"lg:flex-row"}
                    heading={
                    <div className="text-4xl font-semibold">
                        Make a  
                        <HighlightText text={"Difference"} /> with Our Platform
                    </div>
                    }
                    subheading={
                    `We have served over 50,000 meals through our platform, making a significant impact in communities across the region.
                    Over 2,000 donors have contributed to our events, helping to provide essential food to those in need.
                    More than 1,500 volunteers have dedicated their time and effort to support our food donation events.`
                    }
                    ctabtn1={{
                    btnText: "Try it Yourself",
                    link: "/signup",
                    active: true,
                    }}
                    ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                    }}
                    img1={image1}
                    img2={image2}
                    img3={image3}
                    img4={image4}
                />
                </div>
                {/* Code Section 2 */}
                <div>
                    <Slider
                        position={"lg:flex-row-reverse"}
                        heading={
                        <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                            Become a Volunteer
                            <HighlightText text={" in Minutes"} />
                        </div>
                        }
                        subheading={
                        `Join us in making a difference! Sign up as a volunteer to participate in donation events. Whether you’re distributing 
                        food or helping organize, our platform makes it easy to get involved and start helping those in need right away.`
                        }
                        ctabtn1={{
                        btnText: "Be a Volunteer",
                        link: "/signup",
                        active: true,
                        }}
                        ctabtn2={{
                        btnText: "Learn More",
                        link: "/signup",
                        active: false,
                        }}
                        img1={image5}
                        img2={image6}
                        img3={image7}
                        img4={image8}
                    />
                </div>
            </div>


            {/* {section-2} */}
            <div className="bg-richblack-900 text-richblack-5 mt-10">
                <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                        <div className="flex gap-5 mb-10 mt-[95px] justify-between">
                            <div className="text-4xl font-semibold w-[45%]">
                            Gain the Skills to Make a 
                                <HighlightText text={"Difference in Your Community"}/>
                            </div>
                            <div className="flex flex-col gap-10 w-[40%] items-start">
                                <div className="text-lg font-semibold text-richblack-200">
                                Our platform empowers you to develop the essential skills for organizing impactful food donation events and volunteering effectively. 
                                Get involved, enhance your abilities, and help address food insecurity in your area.
                                </div>
                                <CTAButton active={true} linkto={"/signup"}>
                                    Learn More
                                </CTAButton>

                            </div>

                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;