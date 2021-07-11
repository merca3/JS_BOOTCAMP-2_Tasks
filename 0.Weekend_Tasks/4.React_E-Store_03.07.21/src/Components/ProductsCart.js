import { NavLink } from 'react-router-dom';

function ProductsCart({ products, setTotal, changeAmount, remove }) {

    let result = 0;

    const productsDisplayed = products.map((product, index) => {

        result += product.amount * product.price;
        setTotal(result);

        return (
            <div className="row my-3 border rounded p-2 align-items-center" key={index}>
                <div className="col">
                    <NavLink to="/categories/category1/product1">
                        <img className="img-fluid rounded" src={product.img} alt="" />
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink to="/categories/category1/product1" className="nav-link text-dark">{product.title}</NavLink>
                </div>
                <div className="col">
                    <button onClick={() => changeAmount(-1, index)} className="btn btn-outline-info"> - </button>
                    <span> {product.amount} </span>
                    <button onClick={() => changeAmount(1, index)} className="btn btn-outline-info"> + </button>
                </div>
                <div className="col">
                    <span>{product.price}<span>$</span></span>
                </div>
                <div className="col">
                    <span>{(product.amount * product.price).toFixed(2)}<span>$</span></span>
                </div>
                <div className="col">
                    <button onClick={() => remove(index)} className="btn btn-danger">Remove</button>
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
        </div>
    )
}

export default ProductsCart;