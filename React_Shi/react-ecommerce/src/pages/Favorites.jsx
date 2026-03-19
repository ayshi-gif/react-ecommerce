import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage when the page opens
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(saved);
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">My Favorites <i className="fas fa-heart text-danger"></i></h2>
            
            {favorites.length === 0 ? (
                <div className="text-center py-5">
                    <p className="text-muted">You haven't added any favorites yet.</p>
                    <a href="/products" className="btn btn-primary">Browse Victory Resources</a>
                </div>
            ) : (
                <div className="row">
                    {favorites.map(product => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            {/* Reuse your card component */}
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;