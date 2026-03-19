import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-5 mt-5">
            <div className="container">
                <div className="row">
                    {/* Brand Section */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3">Victory Resources</h5>
                        <p className="small text-muted">
                            Providing biblically based resources to help you grow in your walk with God. 
                            Official merchandise of Go Conference 2026.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white text-decoration-none small">Home</Link></li>
                            <li><Link to="/products" className="text-white text-decoration-none small">Products</Link></li>
                            <li><Link to="/policies" className="text-white text-decoration-none small">Store Policies</Link></li>
                            <li><Link to="/contact" className="text-white text-decoration-none small">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-md-4 text-center text-md-end">
                        <h5 className="fw-bold mb-3">Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-white mx-2"><i className="fab fa-facebook fa-lg"></i></a>
                            <a href="https://twitter.com" className="text-white mx-2"><i className="fab fa-twitter fa-lg"></i></a>
                            <a href="https://instagram.com" className="text-white mx-2"><i className="fab fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="my-4 opacity-25" />

                <div className="text-center">
                    <p className="small mb-0">&copy; 2026 Victory Resources. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;