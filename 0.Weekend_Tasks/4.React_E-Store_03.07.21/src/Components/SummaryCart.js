import BillingAddress from './BillingAddress';
import ProductsCart from './ProductsCart';
import ShippingAddress from './ShippingAddress';

function SummaryCart() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-4">
                    <div className="row">
                        <ShippingAddress />
                    </div>
                    <div className="row">
                        <BillingAddress/>
                    </div>
                </div>
                <div className="col-9">
                    <ProductsCart />
                </div> 
            </div>
        </div>
    )
}

export default SummaryCart;