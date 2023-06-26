import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import MidBanner from "../MidBanner/MidBanner";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Testmonials from "../Testimonial/Testmonials";
import ConatctUs from "../ConatctUs/ConatctUs";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MidBanner></MidBanner>
      <MakeAppoinment></MakeAppoinment>
      <Testmonials></Testmonials>
      <ConatctUs></ConatctUs>
    </div>
  );
};

export default Home;
