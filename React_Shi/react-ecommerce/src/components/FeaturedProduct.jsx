import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
    // Filter to show only high-rated products for the homepage
    const featured = products.filter(p => p.rating >= 4).slice(0, 4);

    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Featured Resources</h2>
                <p className="text-muted">Top picks for Go Conference 2026</p>
            </div>
            <div className="row">
                {featured.map(product => (
                    <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;