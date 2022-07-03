import React from "react";
import Slider from "react-slick";

const ProductDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* top section starts  */}
      <section className="">
        {/* section container  */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-[80%] mx-auto">
          {/* image section starts  */}
          <div className="">
            {/* single image container starts  */}
            <div className="border py-12 border-[#E5E5E5] rounded">
              <img
                src="https://i.ibb.co/yBzjvJp/18-1.png"
                alt=""
                className="mx-auto object-cover w-[70%]"
              />
            </div>
            {/* single image container ends */}
            {/* carousel starts  */}
            <div className="">
              <div className="max-w-[80%]">
                <h2> Single Item</h2>
                <Slider {...settings}>
                  {[1, 2, 3, 4, 5].map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* carousel ends */}
          </div>
          {/* image section ends  */}
          <div className="">hii</div>
        </div>
      </section>
      {/* top section ends */}
    </div>
  );
};

export default ProductDetails;
