import React from "react";

const Testimonial = ({ card }) => {
  return (
    <div className="card shadow-md">
      <div className="card-body">
        <p className="text-lg">{card.description}</p>
        <div className="card-actions mt-5 items-center">
          <div className="avatar mr-3">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={card.img} alt="avatar" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg">{card.name}</h2>
            <h3>{card.city}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
