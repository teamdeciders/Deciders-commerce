import React from 'react';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { GiSelfLove } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiListSettingsFill } from 'react-icons/ri';

const Account = () => {
    return (
        <div className='w-[230px] h-[270px] border shadow-xl rounded-lg'>
            <div className='flex gap-2 items-center ml-4 mt-4 cursor-pointer hover:text-success translate-y-0  duration-300'>
                <FiUser className='w-6 h-6'></FiUser>
                <h1>My Account</h1>
            </div>
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




    );
};

export default Account;