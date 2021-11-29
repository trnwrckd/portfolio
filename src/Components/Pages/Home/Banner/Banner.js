import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner full-vh">
            <div>
                <p className="name"> Ishmamur Rahman</p>
                <p className="role">Junior Frontend Developer </p>
                <div>
                    <button className="btn-resume">
                        <a href={`https://drive.google.com/uc?export=download&id=1dcd6jdfshRhmqheHwZ2b5Kn5QI2EfYnT`} download>Download Resume</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

