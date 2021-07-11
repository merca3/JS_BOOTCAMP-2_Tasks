function AddressCart({ shipAdd, setShipAdd, billAdd, setBillAdd }) {

    const getShippingAddress = (event) => {
        setShipAdd(event.target.value)
    }
    const getBillingAddress = (event) => {
        setBillAdd(event.target.value)
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <h5>Shipping Address</h5>
                    <textarea className="form-control" cols="60" rows="10" onChange={getShippingAddress}></textarea>
                </div>
                <div className="col">
                    <h5>Billing Address</h5>
                    <textarea className="form-control" cols="60" rows="10" onChange={getBillingAddress}></textarea>
                </div>
            </div>
        </div>
    )
}

export default AddressCart;