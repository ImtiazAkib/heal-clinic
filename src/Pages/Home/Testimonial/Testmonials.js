import React from "react";
import avatar from "../../../assets/images/people1.png";
import Testimonial from "./Testimonial";
import quote from "../../../assets/icons/quote.svg";

const Testmonials = () => {
  const testimonialsInfo = [
    {
      id: "1",
      img: avatar,
      name: "Winson Herry",
      city: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "2",
      img: avatar,
      name: "Winson Herry",
      city: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "3",
      img: avatar,
      name: "Winson Herry",
      city: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section>
      <div className="flex justify-between items-center my-12">
        <div>
          <h1 className="font-bold text-secondary text-lg uppercase">
            Testimonial
          </h1>
          <p className="text-3xl">What Our Patients Says</p>
        </div>
        <div className="md:w-48 w-32">
          <img className="w-full" src={quote} alt="quote" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 mt-10">
        {testimonialsInfo.map((testimonialInfo) => (
          <Testimonial key={testimonialInfo.id} card={testimonialInfo} />
        ))}
      </div>
    </section>
  );
};

export default Testmonials;
