import React from 'react';

function Arrow({ prevSlider, nextSlider }) {
    return (
        <div className='arrows'>
            <span className='prev' onClick={prevSlider}>
                &#10094;
            </span>
            <span className='next' onClick={nextSlider}>
                &#10095;
            </span>
        </div>
    );
}

export default Arrow;