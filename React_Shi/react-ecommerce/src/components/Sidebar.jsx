import React, { useState, useEffect } from "react";

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                const manualCategories = [
                    "Apparel",
                    "Bags",
                    "Resources",
                    "Accessories"
                ];
                setCategories(manualCategories);
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    return (
        <div className="p-3 border-end h-100">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled">
                {categories.map((category, index) => (
                    <li key={index} className="py-2">
                        <button className="btn btn-link text-decoration-none text-dark p-0 hover-link">
                            <i className="fas fa-chevron-right me-2 small text-muted"></i>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;