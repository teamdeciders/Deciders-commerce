import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import useWindowSize from './useWindowSize';
const NavbarTop = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const size = useWindowSize(); 
    return (
        <>
        {/* for small device */}
        {size <= 1280 && <div className="flex justify-between items-center mt-10 relative ">
            <GiHamburgerMenu className='cursor-pointer w-16' onClick={() => setIsOpen(!isOpen)} />

            <img className='h-[62.17px]' src='https://i.ibb.co/f9VXHJ7/Logo.png' alt="logo" />

            <ul className='flex font-lato  justify-between gap-5 font-base text-textBody mr-5'>
                <li><Link className='flex gap-1 items-center relative' to="/"> <span className='absolute text-xs top-[-9px] left-[9px] bg-success rounded-lg px-1 text-white'>6</span>< BsHeart /></Link></li>
                <li><Link className='flex gap-1 items-center relative' to="/"> <span className='absolute text-xs top-[-9px] left-[9px] bg-success rounded-lg px-1 text-white'>6</span><AiOutlineShoppingCart /></Link></li>
            </ul>

            <div className={`${isOpen ? 'block' : 'hidden'} absolute top-[-50px] left-[-20px] bg-white w-[380px] h-screen z-10 px-5  shadow-lg  `}>
                <ul className='flex justify-between items-center py-5'>
                    <li><Link className='display-2 bg-success' to="/"><img className='h-[48px] ' src='https://i.ibb.co/f9VXHJ7/Logo.png' alt="logo" /></Link></li>
                    <li onClick={() => setIsOpen(!isOpen)} className='cursor-pointer hover:bg-primary px-2 rounded-lg ease-in font-bold'>X</li>
                </ul>
                <form class="flex items-center my-10">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input type="text" class="border border-success text-gray  rounded-lg   block w-full pl-10 p-2.5 " placeholder="Search.." />
                        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </form>
                <ul className='flex flex-col gap-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Hot  Deals</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Food </Link></li>
                    <li><Link to="/">Vegetables</Link></li>
                    <li><Link to="/">Drink </Link></li>
                    <li><Link to="/">Cookies</Link></li>
                    <li><Link to="/">Meat & Seafoodnk</Link> </li>
                    <li><Link to="/">Bakery</Link></li>
                </ul>

            </div>

        </div>}
           
           {/* for large screen */}
            {size >= 1280 && <div className='h-[128px] flex items-center justify-between '>
                <img className='h-[62.17px]' src='https://i.ibb.co/f9VXHJ7/Logo.png' alt="logo" />

                <form class="flex items-center">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input type="text" class="border border-success  text-gray  rounded-lg   block lg:w-[700px] pl-10 p-2.5 " placeholder="Search.." />
                        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </form>


                <ul className='flex font-lato   justify-between gap-5 font-base text-textBody'>
                    <li><Link className='flex gap-1 items-center hover:text-success ' to="/"><FiUser /> Account</Link></li>
                    <li><Link className='flex gap-1 items-center hover:text-success ' to="/"><BsHeart /> Wishlist</Link></li>
                    <li><Link className='flex gap-1 items-center hover:text-success relative' to="/"> <span className='absolute text-xs top-[-9px] left-[9px] bg-success rounded-lg px-1 text-white'>6</span><AiOutlineShoppingCart /> Cart</Link></li>

                </ul>
            </div>
           

            }



        </>
    );
};

export default NavbarTop;