function SummaryCart({ products, shipAdd, billAdd, total }) {

    const productsToDisplay = products.map(product => {

        return (
            <div className="row my-3 border rounded p-2 align-items-center text-center">
                <div className="col">
                    <img className="img-fluid rounded" src={product.img} style={{ height: '70px' }} alt="" />
                </div>
                <div className="col">{product.title}</div>
                <div className="col">
                    <span> {product.amount} </span>
                </div>
                <div className="col">
                    <span>{product.price}<span>$</span></span>
                </div>
                <div className="col">
                    <span>{(product.amount * product.price).toFixed(2)}<span>$</span></span>
                </div>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-4">
                    <div className="row mb-5">
                        <h5>Shipping Address:</h5>
                        <h6 className="fw-normal">{shipAdd}</h6>
                    </div>
                    <div className="row mb-5">
                        <h5>Billing Address:</h5>
                        <h6 className="fw-normal">{billAdd}</h6>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row my-3 fw-bold p-2 text-center align-items-center">
                        <div className="col"></div>
                        <div className="col">Product</div>
                        <div className="col">Qty</div>
                        <div className="col">Price</div>
                        <div className="col">Price Total</div>
                    </div>
                    {productsToDisplay}
                </div>
            </div>
        </div>
    )
}

export default SummaryCart;