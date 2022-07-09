import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsHeadset, BsHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri';
import BrowseAllcatagories from './BrowseAllcatagories';
import MenuCatagoryList from './MenuCatagoryList';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineSearch } from 'react-icons/hi';

const Navbar = () => {

    return (
        <div className='my-24  mx-auto'>
            {/* Top Nav bar */}
            <div className='flex justify-between items-center'>
                <div
                    className='lg:hidden'
                    id="dropdownMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    <GiHamburgerMenu className='cursor-pointer w-16' type="button"
                    />
                </div>

                <ul className=" dropdown-menu w-10/12 absolute bg-white z-50 float-left top-[-62.17px] shadow-md rounded-md hidden px-4 py-2 "
                    aria-labelledby="dropdownMenu"
                >
                    <img className='h-[62.17px] mx-auto' src='https://i.ibb.co/f9VXHJ7/Logo.png' alt="logo" />
                    <form className="flex items-center my-10">
                        <div className="relative w-full">
                            <input type="text" className="border border-success text-gray  rounded-lg   block w-full pl-10 p-2.5 " placeholder="Search.." />
                            <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                                <HiOutlineSearch />
                            </button>
                        </div>
                    </form>
                    <div className='h-full flex flex-col'>
                        <MenuCatagoryList />
                    </div>
                </ul>

                <img className='h-[62.17px]' src='https://i.ibb.co/f9VXHJ7/Logo.png' alt="logo" />
                <form class="hidden lg:flex items-center">
                    <div class="relative w-full">
                        <input type="text" class="border border-success outline-success  text-gray  rounded-lg   block lg:w-[700px] pl-10 p-2.5 " placeholder="Search.." />
                        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                            <HiOutlineSearch />
                        </button>
                    </div>
                </form>
                <div className='flex gap-5'>
                    <Link className='flex gap-3 items-center hover:text-success ' to="/"><BsHeart /> <p className='hidden lg:block'>Wishlist</p></Link>
                    <Link className='flex gap-3 items-center hover:text-success relative' to="/"> <span className='absolute text-xs top-[-9px] left-[9px] bg-success rounded-lg px-1 text-white'>6</span><AiOutlineShoppingCart /> <p className='hidden lg:block'>Cart</p></Link>
                </div>
            </div>




            {/* Bottom navbar */}
            <div className='hidden lg:flex justify-between items-center'>
                <button id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" className='w-[250px] h-[44px] dropdown-toggle rounded whitespace-nowrap bg-success text-white heading-6 flex justify-around items-center hover:bg-opacity-90'>
                    Browse All Categories <BsChevronDown className='font-bold' />
                </button>
                <BrowseAllcatagories />
                <ul className='flex gap-4 items-center'>
                    <MenuCatagoryList />
                    <div>
                        <div className="dropdown relative">

                            <button
                                className="dropdown-toggle bg-blue-600  hover:text-success heading-6 
                                    flex
                                    items-center
                                    whitespace-nowrap
                                  "

                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Pages

                                <RiArrowDropDownLine className='w-6 h-6'></RiArrowDropDownLine>

                            </button>
                            <ul
                                className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none  text-left shadow-md rounded-md mt-1  hidden   m-0  bg-clip-padding border-none"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <div className='w-[230px] h-full flex flex-col '>
                                    <Link to='/blog' className=' ml-4 mt-3 font-que font-medium cursor-pointer hover:text-success translate-y-0  duration-300'>
                                        Blogs
                                    </Link>
                                    <Link to='/about' className=' ml-4 mt-3 font-que font-medium cursor-pointer hover:text-success translate-y-0  duration-300'>
                                        About me
                                    </Link>
                                    <Link to='/contact' className=' ml-4 mt-3 font-que font-medium cursor-pointer hover:text-success translate-y-0  duration-300'>
                                        Contact us
                                    </Link>
                                    <Link to='/login' className=' ml-4 mt-3 font-que font-medium cursor-pointer hover:text-success translate-y-0  duration-300'>
                                        Login
                                    </Link>

                                </div>
                            </ul>
                        </div>
                    </div>
                </ul>
                <div className='flex items-center'>
                    <BsHeadset className='h-[40px] w-[40px]' />
                    <div>
                        <span className='text-scale1 text- heading-4'>1900-80</span><br />
                        <span className='text-textBody text-xs '>24/7 Support Center</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;