import React from 'react';
import ProductCart from './ProductCart';

const YourOrder = () => {
    return (
        <div className='lg:w-1/2 px-5 mt-5 lg:mt-0'>
            <div className='flex justify-between items-center'>
                <h1 className='heading-4'>Your Order </h1>
                <p className='heading-6 text-[#B6B6B6]'>Subtotal: <span className='text-brand1'>$300</span></p>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
        </div>
    );
};

export default YourOrder;