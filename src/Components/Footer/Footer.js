import React from 'react';
import FooterTopBanner from './FooterTopBanner';
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall, FiClock } from 'react-icons/fi'
import { GiPaperPlane } from 'react-icons/gi'
const Footer = () => {
    return (
        <footer>
            <div className='h-[40vh] md:w-full pt-8 '>
                <FooterTopBanner />
                {/* Footer HEre */}
                <div className='mt-6 p-2 flex '>
                    <div className="flex flex-wrap justify-evenly  ">
                        <div className="footerlogo max-w-sm  pr-6   ">
                            <img src="https://i.ibb.co/f9VXHJ7/Logo.png" alt="" />
                            <p className='my-2'> Pellentesque posuere orci lobortis</p>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><GoLocation className='text-[#3BB77E] font-bold inline-block mr-2' /> <span className='font-bold'>Address: </span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
                                <li className=' translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><FiPhoneCall className='text-[#3BB77E] font-bold inline-block mr-2' /> <span className='font-bold'>Call Us: </span> (+91) - 540-025-124553 </li>
                                <li className=' translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><GiPaperPlane className='text-[#3BB77E] font-bold inline-block mr-2' /><span className='font-bold'>Email: </span>contact@nestmart.com</li>
                                <li className=' translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><FiClock className='text-[#3BB77E] font-bold inline-block mr-2' /><span className='font-bold'>Hours: </span> 10:00 - 18:00, Mon - Sat</li>
                            </ul>

                        </div>
                        {/* Company information */}
                        <div className="footercompany min-w-max text-left pr-6 ">

                            <h4 className='my-2 heading-4 font-bold'>Company</h4>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>About Us</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Privacy Policy</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Delivery Information</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Terms & Conditions</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Contact Us</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Support Center</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Careers</li>

                            </ul>

                        </div>
                        {/* Account information */}
                        <div className="footerAccount min-w-max text-left pr-6  ">

                            <h4 className='my-2 heading-4 font-bold'>Account</h4>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Sign In</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>View Cart</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>My Wishlist</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Track My Order</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Help Ticket</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Shipping Details</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Compare products</li>

                            </ul>

                        </div>
                        {/* Corporate information */}
                        <div className="footerCorporate min-w-max text-left pr-6  ">

                            <h4 className='my-2 heading-4 font-bold'>Corporate</h4>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Become a Vendor</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>View Cart</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Affiliate Program</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Farm Business</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Farm Careers</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Our Suppliers</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Accessibility</li>

                            </ul>

                        </div>
                        {/* Information information */}
                        <div className="footerInformation min-w-max text-left  ">

                            <h4 className='my-2 heading-4 font-bold'>Information</h4>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Search Terms</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Advanced Search</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Help & FAQ's</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Store Location</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Help Ticket</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Orders & Returns</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Feedback for us</li>

                            </ul>

                        </div>
                        {/* App & Payment */}
                        <div className="footerApp&Payment pr-6 max-w-sm w-full  ">

                            <h4 className='my-2 heading-4 font-bold'>App & Payment</h4>
                            <p className='my-2 '> Install DL Commerce App from App Store or Google Play</p>
                            <div className='flex'>
                                <img className='w-2/4' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/app-store.jpg" alt="" />
                                <img className='w-2/4' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/google-play.jpg" alt="" />
                            </div>
                            <p className='my-2'>Secured Payment Gateways</p>
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/payment-method.png" alt="" />

                        </div>

                    </div>

                </div>
                <div>
                    <hr className='my-2 bg-[#D8F1E5]' />

                    <div className='md:flex justify-between'>
                        <p>© 2021, Deciders Ecommerce </p>
                        <p>Designed by <span className='text-brand1'>Deciders Team</span> All rights reserved  </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;