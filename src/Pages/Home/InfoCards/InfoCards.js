import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardsInfo = [
    {
      id: "1",
      img: clock,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
    },
    {
      id: "2",
      img: marker,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
    },
    {
      id: "3",
      img: phone,
      title: "Contact us now",
      description: "+000 123 456789",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 mt-10">
      {cardsInfo.map((cardInfo) => (
        <InfoCard key={cardInfo.id} card={cardInfo} />
      ))}
    </div>
  );
};

export default InfoCards;
