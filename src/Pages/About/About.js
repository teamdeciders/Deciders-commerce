import React from 'react';
import Counter from './Counter';
import Performance from './Performance';
import Provide from './Provide';
import Welcome from './Welcome';

const About = () => {
    return (
        <div>
            <Welcome></Welcome>
            <Provide></Provide>
            <Performance></Performance>
            <Counter></Counter>

        </div>
    );
};

export default About;