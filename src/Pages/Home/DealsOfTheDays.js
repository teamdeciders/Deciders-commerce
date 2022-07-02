/*

** Name : Riad Ahmed Roni,

** last Edited : 06/30/2022

*/

import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import Card from "../../Components/DealsOfTheDaysComponents/Card";
import Card_sm from "../../Components/DealsOfTheDaysComponents/Card-sm";
const DealsOfTheDays = () => {
  return (
    <div className="font-main">
      {/* section 1 starts  */}
      <section className="">
        {/* title section  starts  */}
        <div className="flex justify-between mx-3 mb-8">
          <h3 className="text-textHeading text-[25px] md:text-[32px] font-bold">
            Deals Of The Days
          </h3>
          <div className="flex items-center hover:text-brand1 text-[#7E7E7E] ">
            <a
              className="text-[16px] 
             font-semibold mr-1"
              href="#"
            >
              ALL DETAILS
            </a>
            <span className=" ">
              <AiOutlineRight />
            </span>
          </div>
        </div>
        {/* title section  ends  */}
        {/* card section starts */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-3 gap-5 ">
          {/* card 1 starts  */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* card 1 ends  */}
          {/* card 2 starts  */}

          {/* card 2 ends */}
        </div>
        {/* card section ends*/}
      </section>
      {/* section 1 ends */}
      {/* section 2 starts  */}
      <section className="">
        {/* container starts  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-3">
          {/* top seeling starts  */}
          <div className="">
            {/* heading section starts  */}
            <div className="relative">
              <h4 className="text-[24px] font-bold text-textHeading pb-3">
                Top Selling
              </h4>
              <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
            </div>
            {/* heading section ends */}
            {/* small card section starts  */}
            <Card_sm />
            <Card_sm />
            <Card_sm />

            {/* small card section ends */}
          </div>
          {/* top selling ends  */}

          {/* trending products start  */}
          <div className="">
            {/* heading section starts  */}
            <div className="relative">
              <h4 className="text-[24px] font-bold text-textHeading pb-3">
                Top Selling
              </h4>
              <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
            </div>
            {/* heading section ends */}
            {/* small card section starts  */}
            <Card_sm />
            <Card_sm />
            <Card_sm />

            {/* small card section ends */}
          </div>

          {/* trending products ends */}
          {/* recently added section starts  */}
          <div className="">
            {/* heading section starts  */}
            <div className="relative">
              <h4 className="text-[24px] font-bold text-textHeading pb-3">
                Top Selling
              </h4>
              <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
            </div>
            {/* heading section ends */}
            {/* small card section starts  */}
            <Card_sm />
            <Card_sm />
            <Card_sm />

            {/* small card section ends */}
          </div>
          {/* recently added section ends */}

          {/* top rated section starts  */}
          <div className="">
            {/* heading section starts  */}
            <div className="relative">
              <h4 className="text-[24px] font-bold text-textHeading pb-3">
                Top Selling
              </h4>
              <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
            </div>
            {/* heading section ends */}
            {/* small card section starts  */}
            <Card_sm />
            <Card_sm />
            <Card_sm />

            {/* small card section ends */}
          </div>
          {/* top rated section starts  */}
        </div>
        {/* container ends  */}
      </section>
      {/* section 2 ends */}
    </div>
  );
};

export default DealsOfTheDays;
