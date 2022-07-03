import React from 'react';
import banner10 from '../../Assets/New folder/banner-10.png'
import banner9 from '../../Assets/New folder/banner-9.png'

const FooterTopBanner = () => {
    return (
        <section style={{
            background: `url(${banner10})`
        }} className=" rounded-3xl" >
            <div className='lg:flex justify-center items-center'>
                <div className='pl-10'>
                    <h1 className='text-5xl font-bold text-[#253d4e]'>Stay home & get your daily needs from our shop</h1>
                    <p className='text-[#7E7E7E] text-xl font-semibold mt-5 py-4'>Start You'r Daily Shopping with <span className='text-[#3BB77E]'>Nest Mart</span></p>
                    <div className=''>
                        <input className=' px-10 py-5 pl-16 pr-28  rounded-full  mt-4' type="search" name="" id="" placeholder='Your email address' />
                        <button className=' absolute bg-[#3BB77E] rounded-full right-2/3 mt-4  px-8 py-5  text-white'>Subscribe</button>
                    </div>
                </div>
                <div className='pt-8 pr-8'>
                    <img src={banner9} alt="" />
                </div>
            </div>
        </section>
    );
};

export default FooterTopBanner;