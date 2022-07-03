import React from 'react';

function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {
                imageSlider.map((slide, index) => (
                    <div
                        key={index}
                        className={index === activeIndex ? "slides active" : "inactive"}
                    >
                        <img className='slide-image sm:max-w-full' src={slide.urls} alt="" />
                        <h2 className='slide-title'>{slide.title}</h2>
                        <h5 className='slide-text'>{slide.description}</h5>
                        <div>
                            <input className='absolute top-3/4 px-10 py-5 pl-16 pr-28  rounded-full ml-32 mt-4' type="search" name="" id="" placeholder='Your email address' />
                            <img className='absolute top-3/4 mt-10 ml-36 left-3.5 ' src="https://i.ibb.co/mNtrQ4d/icon-email-2-svg.png?fbclid=IwAR0Yb5T5tKoz1_9H2Aj9VVYWIi1WiWXdraX6R8xiqezaeqfP6jS2OruDSTQ" alt="" />

                            <button className='absolute bg-[#3BB77E] rounded-full top-3/4 mt-4 left-1/4 px-8 py-5  text-white'>Subscribe</button>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default SliderContent;