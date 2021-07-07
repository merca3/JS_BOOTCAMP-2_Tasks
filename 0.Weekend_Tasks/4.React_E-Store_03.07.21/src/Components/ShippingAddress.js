import { useState } from "react";

function ShippingAddress() {
    const [shippingAddress, setShippingAddress] = useState('');

    const updateShippingAddress = (event) => {
        setShippingAddress(event.target.value);
    }

    return (
        <div>
            <h5>Shipping address</h5>
            <textarea onChange={updateShippingAddress} value={shippingAddress} className="form-control" type="text" style={{ height: '200px' }} />
        </div>
    )
}

export default ShippingAddress;