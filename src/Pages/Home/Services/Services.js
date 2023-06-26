import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const sevicesInfo = [
    {
      id: "1",
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: "2",
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: "3",
      img: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <section>
      <div className="text-center my-10">
        <h1 className="font-bold text-secondary text-lg uppercase">
          Our services
        </h1>
        <p className="text-3xl">Services We Provide</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 grid-cols-1">
        {sevicesInfo.map((serviceInfo) => (
          <Service key={serviceInfo.id} card={serviceInfo} />
        ))}
      </div>
    </section>
  );
};

export default Services;
