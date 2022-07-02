import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='mx-8 mt-16'>
            <div className='lg:w-[600px] w-full mx-auto h-screen text-center'>
                <img className='w-[300px] mx-auto' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/page-404.png" alt="" />
                <h1 className='lg:text-6xl text-4xl font-lato mt-2 text-[#253D4E]'>Page Not Found
                </h1>

                <p className='mt-4 lg:text-xl font-lato'>The link you clicked may be broken or the page may have been removed.
                </p>
                <p className='mt-2 lg:text-xl font-lato'>visit the <Link to='/' className='text-success'>Homepage</Link> or <Link to='/contuct' className='text-success'>Contact us</Link> about the problem

                </p>


                <div class="relative w-2/4 mx-auto mt-10">
                    <input className='block p-2.5  w-full  text-sm text-gray-900  border border-[ #E5E5E5] rounded  ' type="search" name="" id="" placeholder='Search' />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium hover:bg-success hover:rounded-lg hover:text-white ">  <BsSearch className='w-6 h-6 '></BsSearch></button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;