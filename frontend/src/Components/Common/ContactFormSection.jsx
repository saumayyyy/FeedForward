import React from "react"
import ContactUsForm from "./ContactUsForm";


const ContactFormSection = () => {
  return (
    <div className="mx-auto ">


    <h1 className="text-center text-4xl font-semibold">
        Get In Touch
    </h1>
    <p className="text-md text-richblack-200">
    We'd love to here for you, Please fill out this form.
    </p>
    <div>
        <ContactUsForm/>
    </div>
      
    </div>
  )
};

export default ContactFormSection;