import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import cat from '../../Assets/Image/feature/cat-13-1.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from '../../Components/Navbar/useWindowSize';



const FeaturedCategories = () => {


    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                //here
                className='cursor-pointer inline-block absolute top-[-40px] right-2 p-2 z-10 bg-white  hover:bg-[#3BB77E]  hover:text-white rounded-full shadow-lg'
                onClick={onClick}
            >
                <FaArrowRight />
            </div>
        );
    }


    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                //   here
                className='cursor-pointer inline-block absolute  top-[-40px]  right-12 p-2 z-10 bg-white  hover:bg-[#3BB77E]  hover:text-white rounded-full shadow-lg'
                onClick={onClick}
            >
                <FaArrowLeft />
            </div>
        );
    }

    const size = useWindowSize();
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: size >= 1280 ? 6 : 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    const hotelCards = [
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 1',
            description: '14 items',
            bg: '#f5f5f5',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 2',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 3',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 4',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 5',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 6',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 7',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 8',
            description: '14 items',
        },
        {
            imageSrc:
                ` ${cat}`,
            title: 'Cake & Milk 9',
            description: '14 items',
        },
    ]

    return (
        <section>
            <div className='container flex justify-around   items-center-center'>
                <div className=''>
                    <h1 className='font-bold justify-start text-[32px] text-[#253D4E]'>Featured Categories</h1>
                </div>
                <div className='mt-4'>
                    <ul className="flex text-[16px] text-textBody font-normal gap-4">
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a className=' accent-success' href="/">All</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a href="/">Cake &amp; Milk</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a href="/">Coffes &amp; Teas</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1 "><a href="/">Pet Foods</a></li>
                        <li className="hover:text-[#3BB77E] hover:-translate-y-1"><a href="/">Vegetables</a></li>
                    </ul>
                </div>
                <div className='flex justify-end px-4 gap-2 basis-2/12 '>


                </div>



            </div>
            {/* //  slider start */}
            <div>
                <div>

                    <Slider  {...settings}>
                        {hotelCards.map((card, index) => (
                            <div key={index}>
                                <div className={`flex flex-col justify-center items-center w-[136px] h-[177px] rounded-lg`}>
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

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-6 mx-3 lg:mx-2'>
                <div className='bg-onionOne relative w-full h-60 bg-cover rounded ' >
                    <div className='absolute top-5 z-[2] p-8'>
                        <h3 className='text-[24px] font-bold font-Quicksand text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px] '>Everyday Fresh & <br /> Clean with Our<br /> Products</h3>
                        <button className='bg-[#3BB77E] flex items-center text-white  px-3 py-1 rounded my-4 hover:bg-warning'>
                            <p className='font-[12px] hover:translate-x-0'>Shop Now </p>
                            <FaArrowRight className='m-2 p=2' /> </button>
                    </div>
                </div>

                {/* card-2 */}
                <div className='bg-drinks relative w-full h-60 bg-cover rounded ' >
                    <div className='absolute top-5 z-[2] p-8'>
                        <h3 className='text-[24px] font-bold font-Quicksand text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px]'>Make your Breakfast <br /> Healthy and Easy</h3>
                        <button className='bg-[#3BB77E] flex items-center text-white font-[12px] px-3 py-1 rounded my-4 hover:bg-warning'>
                            <p>Shop Now </p>
                            <FaArrowRight className='m-2 p=2' /> </button>
                    </div>
                </div>
                {/* card -3 */}
                <div className='bg-vegetable relative w-full h-60 bg-cover rounded ' >
                    <div className='absolute top-5 z-[2] p-8'>
                        <h3 className='text-[24px] font-bold font-Quicksand text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px]'>The best Organic <br /> Products Online</h3>
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