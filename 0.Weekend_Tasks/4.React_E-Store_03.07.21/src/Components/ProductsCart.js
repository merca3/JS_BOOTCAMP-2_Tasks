import { product } from 'prelude-ls';
import { useState } from 'react';

import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy4.jpg';
import Toy3 from '../Images/toy5.jpg';

function ProductsCart() {

    const [amountProduct1, setAmountProduct1] = useState(1);
    const [amountProduct2, setAmountProduct2] = useState(3);
    const [amountProduct3, setAmountProduct3] = useState(2);
    const [totalToPay, setTotalToPay] = useState(51.94)
    let result = 0;

    const products = [
        { img: Toy1, title: 'Product 1', amount: amountProduct1, price: 5.99 },
        { img: Toy2, title: 'Product 2', amount: amountProduct2, price: 9.99 },
        { img: Toy3, title: 'Product 3', amount: amountProduct3, price: 7.99 }
    ]
    
    const addItem = () => {
        setAmountProduct1(amountProduct1 + 1);
        setTotalToPay(result.toFixed(2));
        }
    const minusItem = () => {
        if (amountProduct1 > 1) {
            setAmountProduct1(amountProduct1 - 1);
        }
    }

    const productsDisplayed = products.map(product => {
        
        result += product.amount * product.price;
        return (
            <div className="row my-3 border rounded p-2 align-items-center">
                <div className="col">
                    <img className="img-fluid rounded" src={product.img} alt="" />
                </div>
                <div className="col">{product.title}</div>
                <div className="col">
                    <button onClick={minusItem} className="btn btn-outline-info"> - </button>
                    <span> {product.amount} </span>
                    <button onClick={addItem} className="btn btn-outline-info"> + </button>
                </div>
                <div className="col">
                    <span>{product.price}<span>$</span></span>
                </div>
                <div className="col">
                    <span>{(product.amount * product.price).toFixed(2)}<span>$</span></span>
                </div>
                <div className="col">
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        )
    })

    return (
        <div className="container text-center">
            <div className="row my-4 fw-bold">
                <div className="col-2"></div>
                <div className="col-2">Product</div>
                <div className="col-2">Qty</div>
                <div className="col-2">Price</div>
                <div className="col-2">Total</div>
                <div className="col-2"></div>
            </div>
            {productsDisplayed}
            <div className="row justify-content-end">
                <div className="col">
                    <h3>Total To Pay:
                        <button className="btn btn-info btn-lg">
                            <span>{totalToPay}</span><span>$</span>
                        </button></h3>
                </div>
                <div className="col">
                    <button className="btn btn-info btn-lg">Continue to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsCart;