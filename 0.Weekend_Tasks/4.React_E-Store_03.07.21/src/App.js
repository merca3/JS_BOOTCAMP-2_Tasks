import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Categories from './Views/Categories';
import Category from './Views/Category1';
import Product from './Views/Product1';
import Cart from './Views/Cart';
import Page404 from './Views/Page404';

function App() {
  return (
    <div>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/categories'>
                    <Categories />
                </Route>
                <Route exact path='/categories/category1'>
                    <Category />
                </Route>
                <Route exact path='/categories/category1/product1'>
                    <Product />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
                <Route>
                    <Page404 />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
