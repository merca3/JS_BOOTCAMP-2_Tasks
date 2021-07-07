import { useState } from "react";

function BillingAddress() {
    const [billingAddress, setBillingAddress] = useState('');

    const updateBillingAddress = (event) => {
        setBillingAddress(event.target.value);
    }

    return (
        <div>
            <h5>Billing address</h5>
            <textarea onChange={updateBillingAddress} value={billingAddress} className="form-control" type="text" style={{ height: '200px' }} />
        </div>
    )
}

export default BillingAddress;