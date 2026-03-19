import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const formatPrice = (value) => {
        return value.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4"> 🛒 Shopping Cart</h2>

            {/* Conditional rendering based on global cart state */}
            {cart.length === 0 && (
                <div className="alert alert-info">
                    Your cart is empty.
                </div>
            )}

            {/* Render cart items from Context state */}
            {cart.map(item => (
                <div key={item.id} className="cart mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="row align-items-center">

                            {/* Product Info (data comes from Context) */}
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <h5 className="mb-1">{item.name}</h5>
                                <small className="item-muted">
                                    ₱{formatPrice(item.price)}
                                </small>
                            </div>

                            {/* Quantity controls (trigger Context functions) */}
                            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <button
                                        // calls Context action to decrease quantity globally
                                        onClick={() => decreaseQty(item.id)}
                                        className="btn btn-outline-secondary btn-sm"
                                    >
                                        -
                                    </button>

                                    {/* Quantity from global state */}
                                    <span className="mx-3 fw-bold"> {item.qty}</span>

                                    <button
                                        // Calls Context action to increase wuantity globally
                                        onClick={() => increaseQty(item.id)}
                                        className="btn btn-outline-secondary btn-sm"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Remove Button (updates global cart state) */}
                            <div className="col-12 col-md-4 text-center text-md-end" >
                                <button
                                    // Calls Context function to remove item from global state
                                    onClick={() => removeFromCart(item.id)}
                                    className="btn btn-outline-danger btn-sm"
                                >
                                    Remove
                                </button>
                            </div>

                        </div >
                    </div >
                </div >
            ))}

            {/* Total Section (derived from Context state) */}
            {cart.length > 0 && (
                <div className="card shadow mt-4">
                    <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
                        {/* Total updates automatically when Context state changes */}
                        <h4 className="mb-3 mb-md-0">
                            Total: ₱{formatPrice(total)}
                        </h4>

                        <Link to="/checkout" className="btn btn-success btn-lg">
                            Proceed to Checkout
                        </Link>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;