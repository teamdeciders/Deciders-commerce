import React, { useState } from 'react';
import { FiLogOut, FiUser } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { GiHamburgerMenu, GiSelfLove } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import { GoLocation } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiArrowDropDownLine, RiListSettingsFill } from 'react-icons/ri';
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
                    <div class="flex gap-1 items-center">
                        <div>
                            <div class="dropdown relative">

                                <button
                                    class="  dropdown-toggle bg-blue-600   font-medium 
                                    flex
                                    items-center
                                    whitespace-nowrap
                                  "

                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Account

                                    <RiArrowDropDownLine className='w-6 h-6'></RiArrowDropDownLine>

                                </button>
                                <ul
                                    class=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none  text-left shadow-md rounded-md mt-1  hidden   m-0  bg-clip-padding border-none"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <div className='w-[230px] h-[270px] '>
                                        <Link to='/dashboard' className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
                                            <FiUser className='w-6 h-6'></FiUser>
                                            <h1>My Account</h1>
                                        </Link>
                                        <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
                                            <GoLocation className='w-6 h-6'></GoLocation>
                                            <h1>Order Tracking</h1>
                                        </div>
                                        <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer  hover:text-success translate-y-0  duration-300'>
                                            <BiMessageSquareDetail className='w-6 h-6'></BiMessageSquareDetail>
                                            <h1>My Voucher</h1>
                                        </div>
                                        <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer  hover:text-success translate-y-0  duration-300'>
                                            <GiSelfLove className='w-6 h-6'></GiSelfLove>
                                            <h1>My WishList</h1>
                                        </div>
                                        <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer  hover:text-success translate-y-0  duration-300'>
                                            <RiListSettingsFill className='w-6 h-6'></RiListSettingsFill>
                                            <h1>Setting</h1>
                                        </div>
                                        <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
                                            <FiLogOut className='w-6 h-6'></FiLogOut>
                                            <h1>Sing out</h1>
                                        </div>


                                    </div>


                                </ul>
                            </div>
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