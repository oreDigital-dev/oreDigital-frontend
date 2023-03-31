import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Profile = {
  profile: string;
};
function AboutUs() {
  const name = "Eng, Peter MUGABE";
  const companyName = "Mining enginner  at Tinco Ltd.";
  const testimonyText =
    "Here’s  the services that we offer to you, to ensure both your company’s products and employees security   Here’s  the services that we offer to you, to ensure both your company’s products and employees security Here’s  the services that we offer to you, to ensure both your company’s products and employees security Here’s  the services that we offer to you, to ensure both your company’s products and employees security";

  const testimonies: Profile[] = [
    {
      profile: "image/testimonyProfile.png",
    },
    {
      profile: "image/testimonyProfile.png",
    },
    {
      profile: "image/testimonyProfile.png",
    },
    {
      profile: "image/testimonyProfile.png",
    },
    {
      profile: "image/testimonyProfile.png",
    },
    {
      profile: "image/testimonyProfile.png",
    },
  ];

  return (
    <div className="">
      <div className="w-[30vw] ml-28 mt-24">
        <h1 className="text-5xl font-bold">What they talk about us</h1>
        <p>
          Here’s the services that we offer to you, to ensure both your
          company’s products and employees security
        </p>
      </div>
      <div className="flex mt-20 gap-x-12 ml-4 ml-12 mr-12">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
  
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {testimonies?.map((testimony: Profile, index) => (
          <SwiperSlide><div
            key={index}
            className="h-auto w-3/4 bg-white shadow-md shadow-gray-200 rounded-xl pl-8 ml-16 pr-12 pb-12 mr-12 mb-12"
             >  
            <div className="h-20 w-20 rounded-full">
              <img src={testimony.profile} alt="profile" />
            </div>
            <h1 className="text-xl">{name}</h1>
            <p>{companyName}</p>
            <p className="pt-10">{testimonyText}</p>
          </div>
        </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutUs;
