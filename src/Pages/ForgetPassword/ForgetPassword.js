import React from 'react';

const ForgetPassword = () => {
    return (
        <div className='mx-8'>
            <div className='lg:w-[500px] w-full mx-auto h-screen mt-6'>
                <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/forgot_password.svg" alt="" />
                <h1 className='text-4xl font-bold mt-4 text-[#253D4E] font-lato'>Forget Your</h1>
                <h1 className='text-4xl font-bold mt-2 mb-4 text-[#253D4E] font-lato'>Password?</h1>
                <p className='mb-4'>Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.

                </p>
                <form>
                    <input type="email" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Email Address' />
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <input className='w-4 h-4 bg-success ' type="checkbox" name="" id="" />
                            <p className='text-[#B6B6B6] mt-[-5px] font-medium'>I agree to terms & Policy.
                            </p>
                        </div>
                        <button className='font-medium text-success'>Learn more</button></div>
                    <button className=' bg-[#253D4E] w-[150px] py-3 rounded text-white font-medium mt-8'>Reset Password</button>

                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;