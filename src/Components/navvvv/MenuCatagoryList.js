import React from 'react';
import { Link } from 'react-router-dom';

const MenuCatagoryList = () => {
    return (
        <>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Home</Link></li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Hot Deals</Link></li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Food </Link></li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Vegetables</Link></li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Drink </Link></li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Cookies</Link></li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Meat & Seafoodnk</Link> </li>
            <li className='hover:text-success ease-in duration-300'><Link to="/">Bakery</Link></li>
        </>
    );
};

export default MenuCatagoryList;