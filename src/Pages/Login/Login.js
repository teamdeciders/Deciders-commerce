import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-center gap-10 mt-14 mx-8'>

                <div>
                    <img className='w-[410px] h-[500px] hidden lg:block' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png" alt="" />
                </div>

                <div className='lg:w-[450px] mt-10'>
                    <h1 className='text-4xl font-bold text-[#253D4E]'>LOGIN</h1>
                    <p className='font-medium mt-1 mb-6 text-[#B6B6B6]'>Don't have an account ?  <Link to='/singup' className='text-success font-bold'> Create here</Link></p>
                    <form>
                        <input type="email" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Email Address' />
                        <input type="email" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Password' />

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <input className='w-4 h-4 bg-success ' type="checkbox" name="" id="" />
                                <p className='text-success mt-[-5px] font-medium'>Remember me</p>
                            </div>
                            <Link to='/forgetpassword' className='font-medium text-[#B6B6B6]'>Forget Password</Link></div>
                        <button className=' bg-[#253D4E] w-[130px] py-3 rounded text-white mt-8'>Login</button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;