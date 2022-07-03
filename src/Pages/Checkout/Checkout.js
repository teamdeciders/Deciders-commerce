import React from 'react';
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import BillingDetails from './BillingDetails';
import YourOrder from './YourOrder';

const Checkout = () => {
    return (
        <div>
            <h2 className='heading-2 text-textHeading mt-[45px]'>Checkout</h2>
            <h6 className='heading-6 text-textBody mt-5'> These are <span className='text-brand1'>3</span> products in your cart</h6>

            <div className='lg:flex items-center mt-12 gap-10 px-5'>
                <p className='flex items-center gap-2 text-medium text-textBody'> <FiUser /> Already have an account? <Link className='text-brand1' to="/login"> Click here to login</Link></p>

                <form class="flex items-center mt-5 lg:mt-0 ">
                    <div class="w-full">
                        <input type="text" class="border border-1 border-black focus:border-success  text-gray  rounded-l-lg     pl-5 py-[11px] " placeholder="Enter coupon code.." />
                    </div>
                    <button type="button" class="bg-textHeading text-white heading-6 hover:bg-brand1 ease-in duration-300 rounded-r-lg ml-[-43px] w-40 h-12">Apply Coupon </button>
                </form>

            </div>
                <div className='lg:flex mt-10'>
                    <BillingDetails />
                    <YourOrder/>
                </div>

        </div>
    );
};

export default Checkout;