import AddEventForm from "./AddEventForm"

export default function AddEvent() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl text-richblack-5 font-bold">
            Create Food Donation Event
          </h1>
          <div className="flex-1">
            <AddEventForm />
          </div>
        </div>
        {/* Event Creation Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5 font-bold">⚡ Event Creation Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Specify the type of food (veg or non-veg) for clarity.</li>
            <li>Provide the exact quantity of food being donated.</li>
            <li>Include a clear location to help volunteers find the event.</li>
            <li>Provide accurate contact details for easy communication.</li>
            <li>Upload an image of the food to give volunteers a visual reference.</li>
            <li>Set the event date and time to coordinate better with volunteers.</li>
            <li>Update the status of the event once it’s completed or if it needs attention.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
