import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // Secondary state for display
    const [loading, setLoading] = useState(true);

    // State for mandatory features [cite: 14, 17, 19]
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("name");

    useEffect(() => {
        fetch("https://react-ecommerce-backend-rohz.onrender.com/api/products")
            .then((res) => res.json())
            .then((data) => {
                const formatted = data.map(item => ({
                    id: item.id,
                    name: item.name,
                    category: item.category || "General", // Ensure your JSON has categories
                    oldPrice: (item.price * 1.25).toFixed(2),
                    price: item.price,
                    discount: 20,
                    rating: item.rating,
                    image: item.image
                }));
                setProducts(formatted);
                setFilteredProducts(formatted);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Effect to handle Search, Filter, and Sort dynamically [cite: 15, 18, 20]
    useEffect(() => {
        let updatedList = [...products];

        // 1. Search Logic [cite: 14]
        if (searchTerm) {
            updatedList = updatedList.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Filter Logic 
        if (selectedCategory !== "All") {
            updatedList = updatedList.filter(p => p.category === selectedCategory);
        }

        // 3. Sort Logic [cite: 20]
        updatedList.sort((a, b) => {
            if (sortOption === "priceLow") return a.price - b.price; // [cite: 21]
            if (sortOption === "priceHigh") return b.price - a.price; // [cite: 22]
            if (sortOption === "rating") return b.rating - a.rating; // [cite: 24]
            return a.name.localeCompare(b.name); // Default: Name [cite: 23]
        });

        setFilteredProducts(updatedList);
    }, [searchTerm, selectedCategory, sortOption, products]);

    if (loading) return <h3 className="text-center mt-5">Loading Victory Resources...</h3>;

    return (
        <div className="container mt-4">
            <div className="row mb-4 align-items-center">
                {/* Search Bar with Icon */}
                <div className="col-md-6">
                    <div className="input-group shadow-sm">
                        <span className="input-group-text bg-white border-end-0">
                            <i className="fas fa-search text-muted"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0 ps-0"
                            placeholder="Search for resources (e.g. Bible, Cap)..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ boxShadow: 'none' }} // Removes the double blue outline
                        />
                    </div>
                </div>
                {/* Sort Dropdown [cite: 19] */}
                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                    <select className="form-select w-auto d-inline-block" onChange={(e) => setSortOption(e.target.value)}>
                        <option value="name">Sort by Name</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {/* Pass category setter to Sidebar  */}
                    <Sidebar onSelectCategory={setSelectedCategory} />
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {filteredProducts.map(product => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;