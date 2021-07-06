import { NavLink } from 'react-router-dom';
import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy2.jpeg';
import Toy3 from '../Images/toy3.jpeg';
import Toy4 from '../Images/toy4.jpg';
import Toy5 from '../Images/toy5.jpg';
import Toy6 from '../Images/toy6.jpg';

function Categories() {

    return (
        <div className='container mb-5'>
            <h2 className="my-3">Categories:</h2>
            <div className="row mb-2 text-center">
                <div className="col border mx-1">
                    <div className="row p-2">
                        <div className="col">
                            <img className='img-fluid' src={Toy1} alt="" />
                        </div>
                        <div className="col">
                            <h4>Totoro Toys</h4>
                            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col border mx-1">
                    <div className="row p-2">
                        <div className="col">
                            <img className='img-fluid' src={Toy2} alt="" />
                        </div>
                        <div className="col">
                            <h4>Spirited Away Toys</h4>
                            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col border mx-1">
                    <div className="row p-2">
                        <div className="col">
                            <img className='img-fluid' src={Toy3} alt="" />
                        </div>
                        <div className="col">
                            <h4>Howl's Moving Castle Toys</h4>
                            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col border mx-1">
                    <div className="row p-2">
                        <div className="col">
                            <img className='img-fluid' src={Toy4} alt="" />
                        </div>
                        <div className="col">
                            <h4>Kiki's Delivery Service Toys</h4>
                            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col border mx-1">
                    <div className="row p-2">
                        <div className="col">
                            <img className='img-fluid' src={Toy5} alt="" />
                        </div>
                        <div className="col">
                            <h4>Princess Mononoke Toys</h4>
                            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col border mx-1">
                    <div className="row p-2">
                        <div className="col">
                            <img className='img-fluid' src={Toy6} alt="" />
                        </div>
                        <div className="col">
                            <h4>Laputa - Castle In The Sky Toys</h4>
                            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;