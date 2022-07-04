import React from 'react';
import { BsChevronDown, BsHeadset } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    return (
        <div className='flex gap-4 justify-around items-center'>
            <button className='w-[250px] h-[44px] rounded  bg-success text-white heading-6 flex justify-around items-center hover:bg-opacity-90'>
                Browse All Categories <BsChevronDown className='font-bold' /></button>
            <ul className='flex gap-5'>
                <li className='hover:text-success heading-6'><Link to="/">Home</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Hot Deals</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Home</Link></li>
                <li className='hover:text-success heading-6'><Link to="/about">About</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Food </Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Vegetables</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Drink </Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Cookies</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Meat & Seafoodnk</Link> </li>
                <li className='hover:text-success heading-6'><Link to="/">Bakery</Link></li>
            </ul>
            <div className='flex items-center'>
                <BsHeadset className='h-[40px] w-[40px]' />
                <div>
                    <span className='text-scale1 text- heading-4'>1900-80</span><br />
                    <span className='text-textBody text-xs '>24/7 Support Center</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarMenu;