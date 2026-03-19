import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Placeholder for the product image */}
          <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
            <p>Product Image Placeholder (ID: {id})</p>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Product Details</h2>
          <p className="text-muted">Product ID: {id}</p>
          <h3 className="text-danger">P 1,499</h3>
          <p>
            This is a detailed description of the product. You can expand this 
            by fetching real data based on the ID.
          </p>
          <button className="btn btn-primary me-3">
            <i className="fas fa-shopping-cart me-2"></i> Add to Cart
          </button>
          <Link to="/products" className="btn btn-outline-secondary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;