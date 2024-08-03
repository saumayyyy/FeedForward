
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload";
import IconBtn from "../../Common/Iconbtn";
import {setEvent} from "../../../Slice/eventSlice"
import {createEvent} from "../../../operations/eventApi"

import React from "react";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
  const eventLocations = ["Delhi", "Pune", "Mumbai", "Bengaluru", "Chennai"];
  const typeOfFood = ["veg", "non-veg"];
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title",data.eventTitle)
    formData.append("typeOfFood",data.eventTypeOfFood)
    const quantity = Number(data.eventFoodQuantity);
    formData.append("quantity",quantity)
    formData.append("location",data.eventLocation)
    formData.append("contactDetails",data.eventContactDetails)
    formData.append("eventDate",data.eventDate)
    formData.append("image",data.eventImage)
    const result = await createEvent(formData,token);
    if(result){
      dispatch(setEvent(result));
    }
    navigate("/dashboard/my-events");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
    >
      {/* Event Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="eventTitle">
          Event Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="eventTitle"
          placeholder="Enter Event Title"
          {...register("eventTitle", { required: true })}
          className="form-style w-full"
        />
        {errors.eventTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Event title is required
          </span>
        )}
      </div>

      {/* Food Quantity */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="eventFoodQuantity">
          Food Quantity <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="eventFoodQuantity" type="number"
          placeholder="Enter Food Quantity"
          {...register("eventFoodQuantity", { required: true })}
          className="form-style w-full"
        />
        {errors.eventFoodQuantity && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Food Quantity is required
          </span>
        )}
      </div>

      {/* Contact Details */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="eventContactDetails">
          Contact Details <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="eventContactDetails"
          placeholder="Enter Contact Details"
          {...register("eventContactDetails", { required: true })}
          className="form-style w-full"
        />
        {errors.eventContactDetails && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Contact Details are required
          </span>
        )}
      </div>

      {/* Event Type Of Food */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="eventTypeOfFood">
          Event Type Of Food <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("eventTypeOfFood", { required: true })}
          defaultValue=""
          id="eventTypeOfFood"
          className="form-style w-full"
        >
          <option value="" disabled>
            Choose a Type Of Food
          </option>
          {typeOfFood.map((type, indx) => (
            <option key={indx} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.eventTypeOfFood && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Event Type Of Food is required
          </span>
        )}
      </div>

      {/* Event Location */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="eventLocation">
          Event Location <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("eventLocation", { required: true })}
          defaultValue=""
          id="eventLocation"
          className="form-style w-full"
        >
          <option value="" disabled>
            Choose a Location
          </option>
          {eventLocations.map((location, indx) => (
            <option key={indx} value={location}>
              {location}
            </option>
          ))}
        </select>
        {errors.eventLocation && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Event Location is required
          </span>
        )}
      </div>

      {/* Event Date */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="eventDate">
          Event Date <sup className="text-pink-200">*</sup>
        </label>
        <input
          type="date"
          id="eventDate"
          {...register("eventDate", { required: true })}
          className="form-style w-full"
        />
        {errors.eventDate && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Event Date is required
          </span>
        )}
      </div>

      {/* Event Thumbnail Image */}
      <Upload
        name="eventImage"
        label="Event Image"
        register={register}
        setValue={setValue}
        errors={errors}
      />
      
      <div className="flex justify-end gap-x-2">
        <IconBtn text="Create" />
      </div>
    </form>
  );
};

export default AddEventForm;
