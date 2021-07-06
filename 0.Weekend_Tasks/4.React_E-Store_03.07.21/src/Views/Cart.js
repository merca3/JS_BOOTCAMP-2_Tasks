import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductsCart from '../Components/ProductsCart';
import AddressCart from '../Components/AddressCart';
import SummaryCart from '../Components/SummaryCart';

function Cart() {

    return (
        <div className="container mb-5">
            <h2 className="my-3">Cart:</h2>
            <Tabs>
                <TabList className="border-bottom border-muted">
                    <Tab>Products</Tab>
                    <Tab>Address</Tab>
                    <Tab>Summary</Tab>
                </TabList>

                <TabPanel>
                    <ProductsCart />
                </TabPanel>
                <TabPanel>
                    <AddressCart />
                </TabPanel>
                <TabPanel>
                    <SummaryCart />
                </TabPanel>
            </Tabs>
            <div className="row justify-content-end">
                <div className="col-6"></div>
                <div className="col">
                    <h3>Total To Pay: <button className="btn btn-info btn-lg"><span id="total-pay">51.94</span><span>
                        $</span></button></h3>
                </div>
                <div className="col">
                    <button className="btn btn-info btn-lg">Continue to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;