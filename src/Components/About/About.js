import React from 'react';
import about from '../../images/about.jpg';
const About = () => {
    return (
        <div className="d-flex mt-5">
            <div className="text-center mt-5 mb-5">
                <h2>About The Instructor (James)</h2>
                <p>I first picked up a guitar at age 17. I was at a friend’s house. He showed me how to play the riff from “Smells Like Teen Spirit,” and I was immediately hooked. Several thousand hours of practice, performance and one music degree later, I found myself wondering “what next?”</p>
            </div>
            <div className="mt-4 p-3">
                <img src={about} alt="" width="150"
                height="150" />
            </div>
        </div>
    );
};

export default About;