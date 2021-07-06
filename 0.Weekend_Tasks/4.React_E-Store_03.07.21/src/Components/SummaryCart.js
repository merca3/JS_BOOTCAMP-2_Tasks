import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy4.jpg';
import Toy3 from '../Images/toy5.jpg';
import ProductsCart from './ProductsCart';

function SummaryCart() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <h6>Shipping Address</h6>

                    </div>
                    <div className="row">
                        <h6>Billing Address</h6>

                    </div>
                </div>
                <div className="col-9">
                    {/* <div className="row my-4 fw-bold">
                        <div className="col-2">.</div>
                        <div className="col-2">Product</div>
                        <div className="col-2">Qty</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Total</div>
                        <div className="col-2">.</div>
                    </div>
                    <div className="row my-3 border rounded p-2 align-items-center">
                        <div className="col">
                            <img className="img-fluid rounded" src={Toy1} alt="" />
                        </div>
                        <div className="col">Product 1</div>
                        <div className="col">
                            <button className="btn btn-outline-primary"> - </button>
                            <span> 1 </span>
                            <button className="btn btn-outline-primary"> + </button>
                        </div>
                        <div className="col">
                            <span>5.99<span>$</span></span>
                        </div>
                        <div className="col">
                            <span>5.99<span>$</span></span>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                    <div className="row my-3 border rounded p-2 align-items-center">
                        <div className="col">
                            <img className="img-fluid rounded" src={Toy2} alt="" />
                        </div>
                        <div className="col">Product 2</div>
                        <div className="col">
                            <button className="btn btn-outline-primary"> - </button>
                            <span> 3 </span>
                            <button className="btn btn-outline-primary"> + </button>
                        </div>
                        <div className="col">
                            <span>9.99<span>$</span></span>
                        </div>
                        <div className="col">
                            <span>29.97<span>$</span></span>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                    <div className="row my-3 border rounded p-2 align-items-center">
                        <div className="col">
                            <img className="img-fluid rounded" src={Toy3} alt="" />
                        </div>
                        <div className="col">Product 3</div>
                        <div className="col">
                            <button className="btn btn-outline-primary"> - </button>
                            <span> 2 </span>
                            <button className="btn btn-outline-primary"> + </button>
                        </div>
                        <div className="col">
                            <span>7.99<span>$</span></span>
                        </div>
                        <div className="col">
                            <span>15.98<span>$</span></span>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger">Remove</button>
                        </div>
                    </div>*/}
                    <ProductsCart />
                </div> 
            </div>
        </div>
    )
}

export default SummaryCart;