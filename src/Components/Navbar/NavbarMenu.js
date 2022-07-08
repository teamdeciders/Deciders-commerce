import React from 'react';
import { BsChevronDown, BsHeadset, BsPlusCircle } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const NavbarMenu = () => {
    return (
        <div className='flex gap-4 justify-around items-center'>
            <div className="flex justify-center">
                <div>
                    <div className="dropdown relative">


                        <button id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false" className='w-[250px] h-[44px] dropdown-toggle rounded 
          
                           whitespace-nowrap bg-success text-white heading-6 flex justify-around items-center hover:bg-opacity-90'>
                            Browse All Categories <BsChevronDown className='font-bold' />
                        </button>
                        <ul
                            className=" w-[550px] mt-1 dropdown-menu  min-w-max absolute bg-white text-base z-50 float-left py-6 list-none  text-left  rounded-lg  shadow-2xl  hidden  m-0  bg-clip-padding border border-success  "
                            aria-labelledby="dropdownMenuButton2"
                        >

                            <div className='flex mx-4 '>
                                <div className='cursor-pointer'>
                                    <div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md'>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" />
                                        <h1>Milks and Dairies</h1>
                                    </div>
                                    <div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg" alt="" />
                                        <h1>Clothing & Beauty</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg" alt="" />
                                        <h1>Pet Foods and Toy</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg" alt="" />
                                        <h1>Baking Material</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg" alt="" />
                                        <h1>Freash Fruit</h1>
                                    </div>

                                </div>

                                <div className='cursor-pointer'>
                                    <div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md'>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-6.svg" alt="" />
                                        <h1>Wines and Drinks</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-7.svg" alt="" />
                                        <h1>Freash Seafood</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-8.svg" alt="" />
                                        <h1>Fast Food</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-9.svg" alt="" />
                                        <h1>Vegetables</h1>
                                    </div><div className='flex items-center w-[230px] gap-4 mb-3 mx-4 border px-4 py-2 rounded hover:border-success hover:text-success hover:shadow-md '>
                                        <img className='w-8 h-8' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-10.svg" alt="" />
                                        <h1>Bread and juice</h1>
                                    </div>




                                </div>

                            </div>

                            <div className='flex justify-center mt-4 cursor-pointer'>
                                <h1 className='font-medium font-que'> <span className='flex items-center gap-2 '>  <BsPlusCircle className='w-7 h-7 text-success'></BsPlusCircle> Show more...</span></h1>

                            </div>



                        </ul>
                    </div>
                </div>
            </div>







            <ul className='flex flex-wrap gap-4'>
                <li className='hover:text-success heading-6'><Link to="/">Home</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Hot Deals</Link></li>

                <li className='hover:text-success heading-6'><Link to="/">Food </Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Vegetables</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Drink </Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Cookies</Link></li>
                <li className='hover:text-success heading-6'><Link to="/">Meat & Seafoodnk</Link> </li>
                <li className='hover:text-success heading-6'><Link to="/">Bakery</Link></li>
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
    );
};

export default NavbarMenu;