import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton";

const ConatctUs = () => {
  return (
    <div
      className="hero mt-9"
      style={{
        backgroundImage: `url(${appoinment})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-16 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-1 font-bold text-secondary">Conatct Us</h1>
          <p className="mb-5 text-4xl">Stay connected with us</p>
          <form>
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full mb-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full mb-3"
            />
            <textarea
              className="textarea textarea-lg w-full h-32 mb-3"
              placeholder="Your Message"
            ></textarea>
          </form>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ConatctUs;
