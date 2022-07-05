import React from "react";
import { BiCheckbox } from "react-icons/bi";
import WishCartCard from "./WishCartCard";

const Wishlist = () => {
    return (
        <div className="p-5">
            <h2 className='heading-2 text-textHeading mt-[45px]'>Wishlist</h2>
            <h6 className='heading-6 text-textBody mt-5'> These are <span className='text-brand1'>3</span> products in your cart</h6>
            <div className="flex gap-5 heading-6 ">

                <div className="hidden  w-11/12 mx-auto mt-10 mb-4 text-textBody border lg:flex justify-around  ">
                    <div className="lg:w-1/2 flex flex-col lg:flex-row gap-10 items-center">
                        <p className=" text-xl"><BiCheckbox /></p>
                        <p className="">Products</p>
                    </div>

                    <div className="w-11/12 lg:w-1/2 flex flex-col gap-3 lg:flex-row justify-center lg:justify-around items-">
                        <p className="">Price</p>
                        <p className="">Stock Status</p>
                        <p className="">Action</p>
                        <p className="text-end">Remove</p>
                    </div>
                </div>

            </div>
            <WishCartCard />
            <WishCartCard />
            <WishCartCard />



        </div>
    );
};

export default Wishlist;
