import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import cat from '../../Assets/Image/feature/cat-13-1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const FeaturedCategories = () => {
    return (
        <section>
            <div className='container flex justify-center flex-wrap p-4 items-center'>
                <div className='basis-3/12'>
                    <h1 className='font-bold justify-start text-[32px]'>Featured Categories</h1>
                </div>
                <div className='basis-7/12'>
                    <ul className="flex space-x-4 p-5 text-[16px] font-normal items-end">
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 font-semibold"><a className=' accent-success' href="#">All</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 font-semibold"><a href="#">Cake &amp; Milk</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 font-semibold"><a href="#">Coffes &amp; Teas</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 font-semibold"><a href="#">Pet Foods</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 font-semibold"><a href="#">Vegetables</a></li>
                    </ul>
                </div>
                <div className='flex justify-end px-4 gap-2 basis-2/12'>
                    <div className='rounded-full bg-[#F2F3F4] p-3 hover:bg-[#3BB77E]' ><FaArrowLeft /></div>
                    <div className='rounded-full bg-[#F2F3F4] p-3 hover:bg-[#3BB77E]' ><FaArrowRight /></div>
                </div>
                {/* slider start */}
                <div>
                    <div className='flex flex-col justify-center items-center w-[136px] h-[177px] bg-[#F2FCE4] rounded-lg'>
                        <img src={cat} alt="" />
                        <h3 className='text-[16px] font-bold'>Cake & Milk</h3>
                        <p className='text-[#B6B6B6] text-[10px]'>14 items</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default FeaturedCategories;