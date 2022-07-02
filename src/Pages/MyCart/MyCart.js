import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiCheckbox } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { BsBoxArrowRight } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import { FiRefreshCcw } from "react-icons/fi";
import img1 from '../../Assets/best-slider/19 1.png';
import img2 from '../../Assets/best-slider/7 1.png';
import img3 from '../../Assets/best-slider/22 1.png';
import '../../index.css';

const MyCart = () => {
  return (
    <div className="xxl:max-w-7xl md-w-full my-16  mx-auto px-4  md:px-3">
      <h1 className="text-4xl font-main text-textHeading font-bold mb-5">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-3">
        <div className="flex justify-between font-main text-base font-bold text-textBody mb-10">
            <p>
              There are <span className="text-success">3</span> products in your
              cart
            </p>
            <p className="flex items-center gap-2">
              <RiDeleteBin6Line /> Clear Cart
            </p>
          </div>
        </div>
      </div>
      {/* add */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-5">
        <div className="col-span-3">
         <div>
            <div className=" overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left">
                <thead className="font-main text-textBody font-bold text-base bg-[#F5F5F5]">
                  <tr>
                    <th className="px-6 py-4 text-xl"><BiCheckbox/></th>
                    <th className="px-6 py-4">Products</th>
                    <th className="px-6 py-4">Unit Price</th>
                    <th className="px-6 py-4">Quantity</th>
                    <th className="px-6 py-4">Subtotal</th>
                    <th className="px-6 py-4">Remove</th>
                  </tr>
                </thead>
                <tbody className="font-main text-base font-bold text-textHeading">
                  <tr>
                    <td className="px-6 py-4 text-textBody">
                    <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                            <img className="w-20 border p-2 rounded" src={img1} alt="" />
                            <p><small>Field Roast Chao Cheese Creamy Original</small></p>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-textBody text-2xl">
                    $2.51
                    </td>
                    <td className="px-6 py-4">
                        <input className="border rounded text-center outline-[#3BB77E] w-20 py-2" type="number" name="quantity" value={1} />
                    </td>

                    <td className="px-6 py-4 text-[#3BB77E] text-2xl">
                    $2.51
                    </td>
                    <td className="px-6 py-4 text-textBody">
                    <ImCancelCircle className="cursor-pointer mx-auto"/>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-textBody">
                    <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                            <img className="w-20 border p-2 rounded" src={img2} alt="" />
                            <p><small className="leading-normal">Seeds of Change Organic Quinoa, Brown, & Red Rice</small></p>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-textBody text-2xl">
                    $2.51
                    </td>
                    <td className="px-6 py-4">
                        <input className="border rounded text-center outline-[#3BB77E] w-20 py-2" type="number" name="quantity" value={1} />
                    </td>

                    <td className="px-6 py-4 text-[#3BB77E] text-2xl">
                    $2.51
                    </td>
                    <td className="px-6 py-4 text-textBody">
                    <ImCancelCircle className="cursor-pointer mx-auto"/>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-textBody">
                    <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                            <img className="w-20 border p-2 rounded" src={img3} alt="" />
                            <p><small>Field Roast Chao Cheese Creamy Original</small></p>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-textBody text-2xl">
                    $2.51
                    </td>
                    <td className="px-6 py-4">
                        <input className="border rounded text-center outline-[#3BB77E] w-20 py-2" type="number" name="quantity" value={1} />
                    </td>

                    <td className="px-6 py-4 text-[#3BB77E] text-2xl">
                    $2.51
                    </td>
                    <td className="px-6 py-4 text-textBody">
                    <ImCancelCircle className="cursor-pointer mx-auto"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="border col-span-2 sm:px-5 md:px-10 pt-10 pb-3 rounded-md">
            <div className="sm:border-0 md:border rounded p-3">
            <div className="flex justify-between border-b-2">
                <p className="font-main font-bold text-textBody">Subtotal</p>
                <p className="text-[#3BB77E] text-2xl font-main font-bold mb-5">$12.31</p>
            </div>
            <div className="flex justify-between mt-5">
                <p className="font-main font-bold text-textBody">Shipping</p>
                <p className="text-textHeading text-xl font-main font-bold mb-5">Free Shipping</p>
            </div>
            <div className="flex justify-between mt-5 border-b-2">
                <p className="font-main font-bold text-textBody">Estimate for</p>
                <p className="text-textHeading text-xl font-main font-bold mb-5">United Kingdom</p>
            </div>
            <div className="flex justify-between mt-5">
                <p className="font-main font-bold text-textBody">Total</p>
                <p className="text-[#3BB77E] text-2xl font-main font-bold mb-5">$12.31</p>
            </div>
            </div>
            <button className="mt-5 bg-[#3BB77E] flex items-center justify-center gap-3 font-main w-full py-3 font-semibold text-xl text-white rounded-md hover:bg-brandColor2 transition duration-500">Proceed to Checkout <BsBoxArrowRight/></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 mt-16">
        <div className="col-span-3">
        <div className="flex justify-between font-main text-base font-medium text-white mb-10">
           <button className="bg-[#3BB77E] px-3 py-2 rounded flex justify-center items-center gap-3 hover:bg-brandColor2 transition duration-500"><HiArrowLeft/>Continue Shopping</button>
           <button className="bg-[#3BB77E] px-3 py-2 rounded flex justify-center items-center gap-3 hover:bg-brandColor2 transition duration-500"><FiRefreshCcw/>Update Cart</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-3">
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-2 border rounded p-5">
                    <p className="text-2xl font-bold text-textHeading font-main">Calculate Shipping</p>
                    <p className="text-textBody text-base font-main font-semibold"><small>Flat rate:</small> <span className="text-[#3BB77E] font-bold">5%</span></p>
                <form className="mt-5">
                    <select className="border rounded-md w-full outline-[#3BB77E] py-3 px-5 text-textBody font-main" name="country">
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Afghanistan" selected>Bangladesh</option>
                    </select>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7 font-main">
                    <input className="border rounded-md py-3 px-5 outline-[#3BB77E]" type="text" name="city" placeholder="State / City"/>
                    <input className="border rounded-md py-3 px-5 outline-[#3BB77E]" type="text" name="zip" placeholder="Postcode / ZIP"/>
                    </div>
                </form>
                </div>
                <div className="p-5">
                    <p className="text-2xl font-bold text-textHeading font-main">Apply Coupon</p>
                    <p className="text-textBody text-base font-main font-semibold">Using A Promo Code?</p>
                    <div className="flex mt-7">
                        <input className=" border w-full outline-0 px-5 rounded-l" type="text" name="coupon" placeholder="Coupon Code" />
                        <button className=" bg-[#3BB77E] px-3 py-3 rounded-r font-main text-white hover:bg-brandColor2 transition duration-500">Aplly</button>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
      <div className="cart mt-16 bg-[#D8F1E5] pt-5 rounded-md ">
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="p-10">
            <h1 className="text-textHeading font-main font-bold text-4xl">Stay home & get your daily needs from our shop</h1>
            <p className="text-textBody font-semibold font-main text-xl mt-10">Start You'r Daily Shopping with <span className="text-[#3BB77E]">Nest Mart</span></p>
            <div className="flex mt-10">
              <input className="w-full outline-[#3BB77E] rounded-l-full px-5 font-main" type="email" name="email" placeholder="Your Email Address" />
              <button className="bg-[#3BB77E] px-4 py-3 rounded-r-full text-white font-main font-bold">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-3">
          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
