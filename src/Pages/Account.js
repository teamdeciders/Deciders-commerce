import React from 'react';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { GiSelfLove } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiListSettingsFill } from 'react-icons/ri';

const Account = () => {
    return (
        // <div className='w-[230px] h-[270px] border shadow-xl rounded-lg'>
        //     <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
        //         <FiUser className='w-6 h-6'></FiUser>
        //         <h1>My Account</h1>
        //     </div>
        //     <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
        //         <GoLocation className='w-6 h-6'></GoLocation>
        //         <h1>Order Tracking</h1>
        //     </div>
        //     <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer  hover:text-success translate-y-0  duration-300'>
        //         <BiMessageSquareDetail className='w-6 h-6'></BiMessageSquareDetail>
        //         <h1>My Voucher</h1>
        //     </div>
        //     <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer  hover:text-success translate-y-0  duration-300'>
        //         <GiSelfLove className='w-6 h-6'></GiSelfLove>
        //         <h1>My WishList</h1>
        //     </div>
        //     <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer  hover:text-success translate-y-0  duration-300'>
        //         <RiListSettingsFill className='w-6 h-6'></RiListSettingsFill>
        //         <h1>Setting</h1>
        //     </div>
        //     <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
        //         <FiLogOut className='w-6 h-6'></FiLogOut>
        //         <h1>Sing out</h1>
        //     </div>


        // </div>


        <div>
            jjjj
            <button type="button" class="hs-collapse-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" id="hs-basic-collapse" data-hs-collapse="#hs-basic-collapse-heading">
                Collapse
            </button>
            <div id="hs-basic-collapse-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
                <div class="mt-5">
                    <p class="text-gray-500 dark:text-gray-400">
                        This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                    </p>
                </div>
            </div></div>


    );
};

export default Account;