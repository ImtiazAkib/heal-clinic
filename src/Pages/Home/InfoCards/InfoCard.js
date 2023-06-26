import React from "react";

const InfoCard = ({ card }) => {
  return (
    <div
      className={`${
        card.id === "2" ? "bg-accent" : "linear-primary"
      } flex items-center text-white h-44 rounded-lg`}
    >
      <div className="img-container mr-4 mt-3 ml-6">
        <img src={card.img} className="w-5/6" alt="info" />
      </div>
      <div>
        <h2 className="font-bold leading-10">{card.title}</h2>
        <p className="text-sm">{card.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
