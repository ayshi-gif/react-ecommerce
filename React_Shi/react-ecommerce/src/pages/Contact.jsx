const Contact = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Form Column */}
                <div className="col-md-6 mb-4">
                    <h2 className="mb-4">Contact Us</h2>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Juan Dela Cruz" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="juan@email.com" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
                        </div>

                        <button className="btn btn-success">
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Information Column */}
                <div className="col-md-5 offset-md-1">
                    <h2 className="mb-4">Get in Touch</h2>
                    <p className="text-muted mb-4">
                        Have questions about our resources or your order? We're here to help you.
                    </p>

                    <div className="d-flex mb-3">
                        <i className="fas fa-map-marker-alt me-3 mt-1 text-success"></i>
                        <p>Victory Metro East, Robinsons Metro East, Pasig City</p>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="fas fa-envelope me-3 mt-1 text-success"></i>
                        <p>resources@victory.org.ph</p>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="fas fa-phone me-3 mt-1 text-success"></i>
                        <p>+63 (01) 0000-0000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;