import React from "react";
// import ServicesC fro m "./servicesContent";
import { ArrowRight } from "react-bootstrap-icons";
// import Installation from "./Installation";
import Process from "./process";

function HomePage() {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-cover bg-center h-screen w-full flex flex-col"
        style={{ backgroundImage: "url('image/home.png')" }}
      >
        <div className="text-white text-7xl text-center font-extrabold pt-20 ">
          <p className="font-general-sans">All your mining company &apos;s</p>
          <p className="font-general-sans">struggles on our head</p>
        </div>
        <div className="flex space-x-5 mx-auto mt-40 w-[50%] px-32 ">
          <div className="bg-white rounded-full flex py-2 pl-12 pr-5 items-center space-x-5">
          <p className="text-[#AAA] font-general-sans">Company &apos;s email address</p>
          <button className="rounded-full bg-[#5A3FFF] text-white px-5 py-2 flex items-center font-general-sans">Request account <ArrowRight className="ml-2"/></button>
          </div>
          <button className="text-[#3F3F3F] bg-white rounded-full px-12 py-2 font-general-sans">Watch demo</button>
        </div>
        <img className="w-[70%] mx-auto" src="image/notification-center.png"/>
        {/* <ServicesC/> */}
        
      </div>            
    </div>
  );
}

export default HomePage;
