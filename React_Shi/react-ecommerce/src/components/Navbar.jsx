import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const { cart } = useContext(CartContext);

    // --- THEME SWITCHER LOGIC ---
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('bg-dark', 'text-white');
            document.body.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('bg-dark', 'text-white');
            document.body.removeAttribute('data-bs-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <>
            {/* DESKTOP NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">Welcome to Victory Resources!</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/policies" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Policies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="badge bg-danger ms-1">
                                        ({totalQty})
                                    </span>
                                </Link>
                            </li>

                            {/* --- UTILITY SECTION (Favorites & Dark Mode) --- */}
                            <li className="nav-item ms-lg-3 border-start ps-lg-3 d-flex align-items-center">
                                {/* Favorites with Heart Icon */}
                                <NavLink to="/favorites" className="nav-link p-0 me-3 text-danger">
                                    <i className="fas fa-heart fa-lg"></i>
                                </NavLink>

                                {/* Dark Mode Toggle */}
                                <button 
                                    className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-pill`}
                                    onClick={() => setDarkMode(!darkMode)}
                                >
                                    <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM NAVIGATION */}
            <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-lg">
                <div className="container-fluid d-flex justify-content-around text-center">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}
                    >
                        <div>
                            <i className="fa fa-home fs-5"></i>
                            <div style={{ fontSize: "12px" }}>Home</div>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}
                    >
                        <div>
                            <i className="fa fa-box fs-5"></i>
                            <div style={{ fontSize: "12px" }}>Products</div>
                        </div>
                    </NavLink>

                    {/* Favorites Mobile with Heart Icon */}
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}
                    >
                        <div>
                            <i className="fas fa-heart fs-5 text-danger"></i>
                            <div style={{ fontSize: "12px" }}>Favorites</div>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) => isActive ? "text-primary text-decoration-none position-relative" : "text-dark text-decoration-none position-relative"}
                    >
                        <div className="position-relative">
                            <i className="fa fa-shopping-cart fs-5"></i>
                            {totalQty > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
                                    {totalQty}
                                </span>
                            )}
                            <div style={{ fontSize: "12px" }}>Cart</div>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}
                    >
                        <div>
                            <i className="fa fa-phone fs-5"></i>
                            <div style={{ fontSize: "12px" }}>Contact</div>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;