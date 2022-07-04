import React from 'react';
import ReactStars from 'react-rating-stars-component';
import img from '../../Assets/Image/feature/cat-13-1.png';

const ProductCart = () => {
    return (
        <div className=' flex justify-between items-center '>
            <img src={img} alt="product" />
            <div>
                <p className='cursor-pointer heading-6 hover:text-brandColor2 ease-in duration-300'>Yidarton Women Summer Blue</p>
                <ReactStars count={5} value="4" size={24} activeColor="#FDC040"  />
            </div>
            <p className='heading-4 text-[#B6B6B6]'>x 1</p>
            <p className='heading-4 text-brand1'>$100</p>
        </div>
    );
};

export default ProductCart;