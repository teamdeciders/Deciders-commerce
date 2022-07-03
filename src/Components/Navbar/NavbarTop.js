import React, { useState } from 'react';
import { FiLogOut, FiUser } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { GiHamburgerMenu, GiSelfLove } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import { GoLocation } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiListSettingsFill } from 'react-icons/ri';
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
                    {/* <li><Link className='flex gap-1 items-center hover:text-success ' to="/"><FiUser />

                        Account
                    </Link></li> */}

                    <div class="hs-dropdown relative inline-flex">
                        <button id="hs-dropdown-default" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            Actions
                            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-default">
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Newsletter
                            </a>
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Purchases
                            </a>
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Downloads
                            </a>
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Team Account
                            </a>
                        </div>
                    </div>


                    <li><Link className='flex gap-1 items-center hover:text-success ' to="/"><BsHeart /> Wishlist</Link></li>
                    <li><Link className='flex gap-1 items-center hover:text-success relative' to="/"> <span className='absolute text-xs top-[-9px] left-[9px] bg-success rounded-lg px-1 text-white'>6</span><AiOutlineShoppingCart /> Cart</Link></li>

                </ul>
            </div>


            }



        </>
    );
};

export default NavbarTop;