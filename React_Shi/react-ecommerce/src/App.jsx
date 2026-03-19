import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Cart from './pages/Cart'; // Ensure this is moved to src/pages/
import Checkout from './pages/Checkout'; // Ensure this is moved to src/pages/
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      {/* Header and Navbar stay visible on all pages */}
      <Header />
      <Navbar />

      {/* Main content wrapper with Bootstrap padding */}
      <div className="container-fluid px-4 py-4">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          
          {/* Information Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          
          {/* Shopping Cart Route */}
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;