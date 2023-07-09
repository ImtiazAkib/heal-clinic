import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card lg:w-[425px] w-[340px] bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center mt-5">
          <label
            htmlFor="booking_modal"
            disabled={slots.length === 0}
            className={`btn ${
              slots.length === 0 ? "" : "linear-primary"
            } text-white`}
            onClick={() => {
              setTreatment(appointmentOption);
            }}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
