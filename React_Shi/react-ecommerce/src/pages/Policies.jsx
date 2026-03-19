const Policies = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Store Policies & Terms</h2>
            <div className="card shadow-sm p-4">

                {/* Shipping / Distribution */}
                <section className="mb-4">
                    <h5><i className="fas fa-shipping-fast me-2"></i> Distribution & Shipping</h5>
                    <p>
                        We deliver nationwide across the Philippines. For <strong>Go Conference 2026</strong> merchandise,
                        standard shipping takes 3-5 business days. You may also select "Church Pick-up"
                        at designated Victory locations during checkout.
                    </p>
                </section>

                <hr />

                {/* Return & Exchange */}
                <section className="mb-4">
                    <h5><i className="fas fa-undo me-2"></i> Returns & Exchanges</h5>
                    <p>
                        Resources and apparel can be exchanged within 7 days of receipt if the item is defective
                        or the size is incorrect. Items must be in original, unworn condition with tags attached.
                    </p>
                </section>

                <hr />

                {/* Privacy & Data */}
                <section>
                    <h5><i className="fas fa-user-shield me-2"></i> Privacy & Stewardship</h5>
                    <p>
                        Your personal information is handled with care and used solely for processing your
                        orders for Victory Resources. We value your trust and keep your data secure.
                    </p>
                </section>

            </div>

            <p className="text-center mt-4 small text-muted">
                Last Updated: March 2026 • Victory Resources Team
            </p>
        </div>
    );
};

export default Policies;