import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../components/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <div
      className="lg:relative lg:h-[500px] mt-32"
      style={{
        backgroundImage: `url(${appoinment})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-end items-center text-neutral-content lg:pr-5 py-24 px-5 lg:px-0 lg:py-0 h-full">
        <div className="lg:w-5/12 md:w-11/12">
          <h1 className="mb-5 font-bold text-secondary">Appointment</h1>
          <h1 className="mb-5 text-3xl font-bold">Make an appointment Today</h1>
          <p className="mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
      <div className="absolute bottom-0 hidden lg:block">
        <img className="w-11/12" src={doctor} alt="doctor" />
      </div>
    </div>
  );
};

export default MakeAppoinment;
