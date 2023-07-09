import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <header className="my-6">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
            <img
              src={chair}
              className="lg:w-1/2 rounded-lg shadow-2xl"
              alt="chair"
            />
            <div>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AppointmentBanner;
