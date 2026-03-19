import React from 'react';

const Hero = () => {
    return (
        <div className="bg-primary text-white py-5 mb-5 shadow-sm">
            <div className="container py-5 text-center">
                <h1 className="display-3 fw-bold mb-3">GO CONFERENCE 2026</h1>
                <p className="lead mb-4 opacity-90">
                    Equipping the next generation. Get your official conference gear and resources today.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="/products" className="btn btn-light btn-lg px-4 rounded-pill fw-bold">
                        Shop Now
                    </a>
                    <a href="/about" className="btn btn-outline-light btn-lg px-4 rounded-pill">
                        Our Mission
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;