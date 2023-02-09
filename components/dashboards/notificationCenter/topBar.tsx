/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
function TopBar() {
  return (
    <div className="h-24  text-[0.80rem]">
      <div className="flex items-center float-right mt-6">
     <p className="pr-4">Mining admin</p>
     <img src="image/profile.png" alt="profile" className="h-10 w-10 rounded-full mr-8" />
     </div>
    </div>
  );
}

export default TopBar;
