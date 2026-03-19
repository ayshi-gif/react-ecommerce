import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    // Get addToCart from global context
    const { addToCart } = useContext(CartContext);

    // --- FAVORITES LOGIC ---
    const [isFavorite, setIsFavorite] = useState(false);

    // Check if this product is already in favorites on initial load
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const found = savedFavorites.find(item => item.id === product.id);
        if (found) setIsFavorite(true);
    }, [product.id]);

    const toggleFavorite = () => {
        let savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        if (isFavorite) {
            // Remove from favorites 
            savedFavorites = savedFavorites.filter(item => item.id !== product.id);
            setIsFavorite(false);
        } else {
            // Add to favorites 
            savedFavorites.push(product);
            setIsFavorite(true);
        }
        
        localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    };

    return (
        <div className="card h-100 shadow-sm position-relative">
            {/* FAVORITE BUTTON (Heart Icon) */}
            <button 
                className="btn position-absolute top-0 end-0 m-2 border-0 shadow-none" 
                onClick={toggleFavorite}
                style={{ zIndex: 10, color: isFavorite ? '#dc3545' : '#6c757d' }}
                title="Mark as favorite"
            >
                <i className={`${isFavorite ? 'fas' : 'far'} fa-heart fa-lg`}></i>
            </button>

            {/* Image wrapper for zoom and badge */}
            <div className="product-img-wrapper">
                {/* Sale Badge */}
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}
                <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.name}
                />
            </div>

            <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.name}</h6>

                <div className="mb-2 text-warning d-flex">
                    {[...Array(5)].map((star, index) => (
                        <i
                            key={index}
                            className={`${index < product.rating ? 'fas' : 'far'} fa-star me-1`}
                        ></i>
                    ))}
                </div>

                {/* Price Section */}
                <div className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">
                        ₱{product.oldPrice}
                    </span>
                    <span className="fw-bold text-danger">
                        ₱{product.price}
                    </span>
                </div>

                {/* When clicked, send this product to App.jsx */}
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;