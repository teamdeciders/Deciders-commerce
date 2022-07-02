import React, { useRef, useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import cat from '../../Assets/Image/feature/cat-13-1.png'
import onion from '../../Assets/Image/feature/onion.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';



const FeaturedCategories = () => {
    const [sliderRef, setSliderRef] = useState(null)

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    }
    const hotelCards = [
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk',
            description: '14 items',
        },
    ]
    return (
        <section>
            <div className='container flex justify-center flex-wrap p-4 items-center'>
                <div className='basis-3/12'>
                    <h1 className='font-bold justify-start text-[32px] text-[#253D4E]'>Featured Categories</h1>
                </div>
                <div className='basis-7/12'>
                    <ul className="flex space-x-4 p-5 text-[16px] text-textBody font-normal items-end">
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a className=' accent-success' href="#">All</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a href="#">Cake &amp; Milk</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a href="#">Coffes &amp; Teas</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a href="#">Pet Foods</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1"><a href="#">Vegetables</a></li>
                    </ul>
                </div>
                <div className='flex justify-end px-4 gap-2 basis-2/12'>
                    <div onCLick={sliderRef?.slickPrev} className='rounded-full bg-[#F2F3F4] p-3 hover:bg-[#3BB77E]' ><FaArrowLeft /></div>
                    <div onCLick={sliderRef?.slickNext} className='rounded-full bg-[#F2F3F4] p-3 hover:bg-[#3BB77E]' ><FaArrowRight /></div>


                </div>



            </div>
            {/* //  slider start */}
            <div>
                <div>
                    <button onCLick={sliderRef?.slickPrev}>
                        <FaChevronLeft />
                    </button>
                    <button onCLick={sliderRef?.slickNext}>
                        <FaChevronRight />
                    </button>
                    <Slider ref={setSliderRef} {...settings}>
                        {hotelCards.map((card, index) => (
                            <div key={index}>
                                <div className='flex flex-col justify-center items-center w-[136px] h-[177px] bg-[#F2FCE4] rounded-lg'>
                                    <img src={card.imageSrc} alt="" />
                                    <h3 className='text-[16px] font-bold'>{card.title}</h3>
                                    <p className='text-[#B6B6B6] text-[10px]'>{card.description}</p>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>

            </div>
            {/* three card */}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-6'>
                <div className='bg-onionOne relative w-full h-60 bg-cover rounded ' >
                    <div className='absolute top-5 z-[2] p-8'>
                        <h3 className='text-[24px] font-bold font-Quicksand text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px] '>Everyday Fresh & <br />
                            Clean with Our<br />
                            Products</h3>
                        <button className='bg-[#3BB77E] flex items-center text-white  px-3 py-1 rounded my-4 hover:bg-warning'>
                            <p className='font-[12px] hover:translate-x-0'>Shop Now </p>
                            <FaArrowRight className='m-2 p=2' /> </button>
                    </div>
                </div>

                {/* card-2 */}
                <div className='bg-drinks relative w-full h-60 bg-cover rounded ' >
                    <div className='absolute top-5 z-[2] p-8'>
                        <h3 className='text-[24px] font-bold font-Quicksand text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px]'>Make your Breakfast <br />
                            Healthy and Easy</h3>
                        <button className='bg-[#3BB77E] flex items-center text-white font-[12px] px-3 py-1 rounded my-4 hover:bg-warning'>
                            <p>Shop Now </p>
                            <FaArrowRight className='m-2 p=2' /> </button>
                    </div>
                </div>
                {/* card -3 */}
                <div className='bg-vegetable relative w-full h-60 bg-cover rounded ' >
                    <div className='absolute top-5 z-[2] p-8'>
                        <h3 className='text-[24px] font-bold font-Quicksand text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px]'>The best Organic <br />
                            Products Online</h3>
                        <button className='bg-[#3BB77E] flex items-center text-white font-[12px] px-3 py-1 rounded my-4 hover:bg-warning'>
                            <p>Shop Now </p>
                            <FaArrowRight className='m-2 p=2' /> </button>
                    </div>
                </div>
            </div>




        </section >
    );
};

export default FeaturedCategories;