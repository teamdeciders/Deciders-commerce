import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { FiEye } from "react-icons/fi";

const PopularProducts = () => {
  return (
    <div className="lg:max-w-7xl md-w-full my-16  mx-auto px-4  md:px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h1 className="heading-3 mb-10 text-[#253D4E]">Popular Products</h1>
        <div>
            <ul className="flex gap-5 justify-end text-textBody">
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">All</li>
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">Milks & Dairies</li>
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">Coffes & Teas</li>
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">Pet Foods</li>
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">Meats</li>
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">Vegetables</li>
                <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">Fruits</li>
            </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <p className="mt-2 mb-3 text-[#FFF]">
            <small className="bg-[#3BB77E] text-center px-4 py-1 z- rounded-r-full ">
              Hot
            </small>
          </p>
          <div className="relative ">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Snack</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(4.0)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">NestFood</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$28.85</p>
              <del className="text-textBody font-semibold">32.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <p className="mt-2 mb-3 text-[#FFF]">
            <small className="bg-[#FD6E6E] text-center px-4 py-1 z- rounded-r-full ">
              -17%
            </small>
          </p>
          <div className="relative ">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Hodo Foods</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            All Natural Italian-Style Chicken Meatballs
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">Stouffer</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <p className="mt-2 mb-3 text-white">
            <small className="bg-[#FDC040] text-center px-4 py-1 z- rounded-r-full ">
              Sale
            </small>
          </p>
          <div className="relative ">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Hodo Foods</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">StarKist</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <div className="relative mt-10">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Vegetables</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            Foster Farms Takeout Crispy Classic Buffalo Wings
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">Nestfood</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <div className="relative mt-10">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Pet Foods</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            Blue Diamond Almonds Lightly Salted Vegetables
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">Stouffer</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <p className="mt-2 mb-3 text-[#FFF]">
            <small className="bg-[#3BB77E] text-center px-4 py-1 z- rounded-r-full ">
              Hot
            </small>
          </p>
          <div className="relative ">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Snack</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(4.0)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">NestFood</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$28.85</p>
              <del className="text-textBody font-semibold">32.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <p className="mt-2 mb-3 text-[#FFF]">
            <small className="bg-[#FD6E6E] text-center px-4 py-1 z- rounded-r-full ">
              -17%
            </small>
          </p>
          <div className="relative ">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Hodo Foods</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            All Natural Italian-Style Chicken Meatballs
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">Stouffer</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <p className="mt-2 mb-3 text-white">
            <small className="bg-[#FDC040] text-center px-4 py-1 z- rounded-r-full ">
              Sale
            </small>
          </p>
          <div className="relative ">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Hodo Foods</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">StarKist</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <div className="relative mt-10">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Vegetables</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            Foster Farms Takeout Crispy Classic Buffalo Wings
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">Nestfood</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
          <div className="relative mt-10">
            <div className="flex items-center">
              <img
                className="group-hover:hidden transition duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg"
                alt=""
              />
              <img
                className="group-hover:scale-105 ease-in-out duration-500"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#"
                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
              >
                <FiEye />
              </a>
            </div>
          </div>
          <div className="p-3">
            <p className="text-textBody hover:text-[#3BB77E]">
              <small>Pet Foods</small>
            </p>
            <p className="heading-sm hover:text-[#3BB77E]">
            Blue Diamond Almonds Lightly Salted Vegetables
            </p>
            <div className="flex items-center text-warning gap-1 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-textBody">(3.5)</span>
            </div>
            <p>
              By <span className="text-[#3BB77E]">Stouffer</span>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-[#3BB78F]">$52.85</p>
              <del className="text-textBody font-semibold">55.80</del>
              <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
                <AiOutlineShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularProducts;
