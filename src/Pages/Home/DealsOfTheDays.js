/*

** Name : Riad Ahmed Roni,

** last Edited : 06/30/2022

*/

import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const DealsOfTheDays = () => {
  return (
    <div className="">
      {/* title section  starts  */}
      <div className="flex justify-between mx-3">
        <h3 className="text-[#253D4E] text-[32px] font-bold">
          Deals Of The Days
        </h3>
        <div className="flex items-center hover:text-[#3BB77E] text-[#7E7E7E] ">
          <a
            className="text-[16px] 
             font-normal mr-1"
            href="/"
          >
            ALL DETAILS
          </a>
          <span className=" ">
            <AiOutlineRight />
          </span>
        </div>
      </div>
      {/* title section  ends  */}
      card section starts
    </div>
  );
};

export default DealsOfTheDays;
