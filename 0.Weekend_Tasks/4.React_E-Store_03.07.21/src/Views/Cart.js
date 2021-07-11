import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import ProductsCart from '../Components/ProductsCart';
import AddressCart from '../Components/AddressCart';
import SummaryCart from '../Components/SummaryCart';
import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy4.jpg';
import Toy3 from '../Images/toy5.jpg';

function Cart() {
    const [products, setProducts] = useState([
        { img: Toy1, title: 'Product 1', amount: 1, price: 5.99 },
        { img: Toy2, title: 'Product 2', amount: 3, price: 9.99 },
        { img: Toy3, title: 'Product 3', amount: 2, price: 7.99 }]);

    const [totalToPay, setTotalToPay] = useState(51.94);
    const [shippingAddress, setShippingAddress] = useState('');
    const [billingAddress, setBillingAddress] = useState('');

    const changeAmount = (change, index) => {
        const newProducts = [...products];
        newProducts[index].amount += change;

        if (newProducts[index].amount <= 0) {
            newProducts[index].amount = 1;
        }

        setProducts(newProducts);
    }

    const removeProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    }

    return (
        <div className="container mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-3">
                    <li className="breadcrumb-item">
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
            </nav>
            <h2 className="my-3">Cart:</h2>
            <Tabs>
                <TabList className="border-bottom border-muted">
                    <Tab>Products</Tab>
                    <Tab>Address</Tab>
                    <Tab>Summary</Tab>
                </TabList>

                <TabPanel>
                    <ProductsCart products={products} setProducts={setProducts} setTotal={setTotalToPay} changeAmount={changeAmount} remove={removeProduct} />
                </TabPanel>
                <TabPanel>
                    <AddressCart shipAdd={shippingAddress} setShipAdd={setShippingAddress} billAdd={billingAddress} setBillAdd={setBillingAddress} />
                </TabPanel>
                <TabPanel>
                    <SummaryCart products={products} shipAdd={shippingAddress} billAdd={billingAddress} total={totalToPay} />
                </TabPanel>
            </Tabs>
            <div className="row justify-content-end">
                <div className="col-3">
                    <h3>Total To Pay:
                        <button className="btn btn-info btn-lg">
                            <span>{totalToPay.toFixed(2)}</span><span>$</span>
                        </button></h3>
                </div>
                <div className="col-3">
                    <button className="btn btn-info btn-lg">Continue to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;