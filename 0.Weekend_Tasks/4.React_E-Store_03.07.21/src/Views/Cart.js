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
        </div>
    )
}

export default Cart;