import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";

function AddressCart() {

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <ShippingAddress />
                </div>
                <div className="col">
                    <BillingAddress />
                </div>
            </div>
        </div>
    )
}

export default AddressCart;