function AddressCart() {

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <h5>Shipping address</h5>
                    <textarea className="form-control" type="text" style={{height: '200px'}} />
                </div>
                <div className="col">
                    <h5>Billing address</h5>
                    <textarea className="form-control" type="text" style={{height: '200px'}} />
                </div>
            </div>
        </div>
    )
}

export default AddressCart;