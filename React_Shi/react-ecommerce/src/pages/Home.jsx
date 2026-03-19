import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import banner1 from "../assets/images/banner2.png";
import banner2 from "../assets/images/banner3.png"; // Add this line

const Home = () => {
    // Store featured products
    const [products, setProducts] = useState([]);

    // Track loading state
    const [loading, setLoading] = useState(true);

    // Fetch products when component loads
    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {

                // Get only first 4 products
                const firstFour = data.slice(0, 4);

                // Map API data to product model
                const formatted = firstFour.map(item => ({
                    id: item.id,
                    name: item.title,
                    oldPrice: (item.price * 1.25).toFixed(2),
                    price: item.price,
                    discount: 20,
                    rating: Math.round(item.rating.rate),
                    image: item.image
                }));

                setProducts(formatted);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h3 className="text-center mt-4">Loading featured products...</h3>;
    }

    return (
        <div className="container mt-4">

            {/* Store Banner */}
            <img
                src={banner}
                className="img-fluid w-100 mb-4"
                alt="Store Banner"
            />

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Featured Products</h2>

                {/* Link to full ProductList page */}
                <Link to="/products" className="btn btn-outline-primary">
                    View More Products
                </Link>
            </div>

            <div className="row">
                {products.map((product) => (
                    <div
                        className="col-lg-3 col-md-4 col-sm-6 mb-4"
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            {/* --- CAROUSEL AT THE BOTTOM --- */}
            <div id="bottomCarousel" className="carousel slide shadow-sm rounded-4 overflow-hidden mt-5" data-bs-ride="carousel">
                {/* Indicators (Optional: small dots at the bottom) */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#bottomCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#bottomCarousel" data-bs-slide-to="1"></button>
                </div>

                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img
                            src={banner1}
                            className="d-block w-100"
                            alt="Victory Resources Banner 1"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item" data-bs-interval="3000">
                        <img
                            src={banner2}
                            className="d-block w-100"
                            alt="Victory Resources Banner 2"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#bottomCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bottomCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Home;