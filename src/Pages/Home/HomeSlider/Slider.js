import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import imageSlider from './HomeBanner'
import Arrow from '../Arrow';
import Dots from '../Dots';
import './slider.css'

const len = imageSlider.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 9000)
        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}></SliderContent>
            <Arrow
                prevSlider={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlider={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            ></Arrow>
            <Dots
                activeIndex={activeIndex}
                imageSlider={imageSlider}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            ></Dots>
        </div>
    );
}

export default Slider;