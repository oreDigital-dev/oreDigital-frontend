import React from "react";
import IncidentCard from "./IncidentCard";

const ServicesC = () => {
  return (
    <div className="flex flex-col mt-[15%]">
      <div className="text-center w-[30%] mx-auto mb-8">
        <h1 className="font-extrabold text-5xl mb-4 font-general-sans">Our services</h1>
        <p className="text-[#3F3F3F] font-general-sans">
          Here &apos;s the services that we offer to you, to ensure both your
          company &apos;s products and employees security
        </p>
      </div>
      <IncidentCard />
    </div>
  );
};

export default ServicesC;
