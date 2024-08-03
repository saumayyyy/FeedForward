import React from "react"
import HighlightText from "../Components/Homepage/HighlightText";
import BannerImage1 from "../assets/AboutUS/aboutus1.jpeg"
import BannerImage2 from "../assets/AboutUS/aboutus2.jpg"
import BannerImage3 from "../assets/AboutUS/aboutus3.jpeg"
import FoundingStory from "../assets/AboutUS/aboutus4.jpg"
import StatsComponent from "../Components/Common/Stats";
import LearningGrid from "../Components/Common/LearningGrid";
import ContactFormSection from "../Components/Common/ContactFormSection";
import Footer from "../Components/Common/Footer"



const About = () => {
    return (
      <div className="w-screen bg-richblack-900">
        <section className="bg-richblack-700">
          <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
            <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Food Donation and Volunteering for a
              <HighlightText text={" Brighter Future"} />
              <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Feed Forward is at the forefront of driving innovation in food donation and volunteering. We're passionate about creating a brighter future by offering streamlined event creation, leveraging emerging technologies, and nurturing a vibrant community of givers and volunteers.
              </p>
            </header>
            <div className="sm:h-[70px] lg:h-[150px]"></div>
            <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
              <img src={BannerImage1} alt="" />
                  <img src={BannerImage2} alt="" className="h-[90%]"/>
              <img src={BannerImage3} alt="" className="h-[90%]"/>
            </div>
          </div>
        </section>
  
  
        <section className="mt-10">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-center text-richblack-500">
            <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
              <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                  Our Founding Story
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our platform was born out of a shared vision and passion for transforming food donation and volunteer opportunities. It all began with a group of compassionate individuals, technologists, and community activists who recognized the need for accessible, flexible, and high-quality ways to contribute in a rapidly evolving digital world.
                </p>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As active community members, we witnessed firsthand the limitations and challenges of traditional donation and volunteer systems. We believed that these efforts should not be confined to physical locations or restricted by logistical barriers. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential to help others.
                </p>
              </div>
  
              <div>
                <img
                  src={FoundingStory}
                  alt=""
                  className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
              <div className="flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                  Our Vision
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create a platform that would revolutionize the way people engage in food donation and volunteering. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging features, fostering a dynamic and interactive community experience.
                </p>
              </div>
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just facilitating donations and volunteer events. We aim to create a vibrant community of givers and helpers, where individuals can connect, collaborate, and learn from one another. We believe that compassion thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <StatsComponent />
        <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white mb-[40px] bg-richblack-700">
          <LearningGrid />
        </section>

        <Footer />
      </div>
    )
  }
  
  export default About