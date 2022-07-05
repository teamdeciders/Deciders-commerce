import React from 'react';
import img1 from '../../Assets/Image/feature/cat-13-1.png';
import { RiDeleteBin6Line} from 'react-icons/ri';
import ReactStars from 'react-rating-stars-component';

const WishCartCard = () => {
  return (

    <div className="w-11/12 mx-auto mt-5 mb-4  text-brand1 heading-6  flex flex-col lg:flex-row justify-center lg:justify-around   items-center ">
      <div className="lg:w-1/2 flex flex-col lg:flex-row gap-10 items-center">
        <p className=" text-xl hidden lg:block"><input type="checkbox" name="checkbox" /></p>
        <img className=" w-full lg:w-auto border rounded " src={img1} alt="" />
        <div className="">
          <p className="hover:text-brandColor2 transition duration-300 cursor-pointer">Fresh Organic Mustard Leaves Bell Pepper</p>
          <ReactStars count={5} value="4" size={12} activeColor="#FDC040" />
        </div>
      </div>

      <div className="w-11/12 lg:w-1/2 flex flex-col gap-3 lg:flex-row justify-center lg:justify-around items-center text-brand1 ">
        <p className="heading-4">$100</p>
        <p className="bg-[#dcfce7] px-2 py-1 rounded">In Stock</p>
        <button className="bg-[#3BB77E] w-full lg:w-40 px-3 py-2 rounded text-white hover:bg-brandColor2 transition duration-300">Add to Cart</button>
        <p className="hidden lg:block hover:text-brandColor2 transition duration-300"><RiDeleteBin6Line /></p>
      </div>
    </div>

  );
};

export default WishCartCard;