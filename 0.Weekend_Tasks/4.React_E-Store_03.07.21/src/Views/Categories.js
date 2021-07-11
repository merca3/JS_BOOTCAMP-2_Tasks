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
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-3">
                    <li className="breadcrumb-item">
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Categories</li>
                </ol>
            </nav>
            <h2 className="my-3">Categories:</h2>
            <div className="row h-100 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-2 text-center">
                <div className="col card border">
                    <div className="row p-2">
                        <div className="col-4 align-self-center">
                            <img className='img-fluid' src={Toy1} alt="" />
                        </div>
                        <div className="col-8 card-body">
                            <h4 className="card-title">Totoro Toys</h4>
                            <p className="card-text">Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col card border">
                    <div className="row p-2">
                        <div className="col-4 align-self-center">
                            <img className='img-fluid' src={Toy2} alt="" />
                        </div>
                        <div className="col-8 card-body">
                            <h4 className="card-title">Spirited Away Toys</h4>
                            <p className="card-text">Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col card border">
                    <div className="row p-2">
                        <div className="col-4 align-self-center">
                            <img className='img-fluid' src={Toy3} alt="" />
                        </div>
                        <div className="col-8 card-body">
                            <h4 className="card-title">Howl's Moving Castle Toys</h4>
                            <p className="card-text">Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>

                </div>
                <div className="col card border">
                    <div className="row p-2">
                        <div className="col-4 align-self-center">
                            <img className='img-fluid' src={Toy4} alt="" />
                        </div>
                        <div className="col-8 card-body">
                            <h4 className="card-title">Kiki's Delivery Service Toys</h4>
                            <p className="card-text">Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col card border">
                    <div className="row p-2">
                        <div className="col-4 align-self-center">
                            <img className='img-fluid' src={Toy5} alt="" />
                        </div>
                        <div className="col-8 card-body">
                            <h4 className="card-title">Princess Mononoke Toys</h4>
                            <p className="card-text">Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>

                </div>
                <div className="col card border">
                    <div className="row p-2">
                        <div className="col-4 align-self-center">
                            <img className='img-fluid' src={Toy6} alt="" />
                        </div>
                        <div className="col-8 card-body">
                            <h4 className="card-title">Laputa - Castle In The Sky Toys</h4>
                            <p className="card-text">Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            <NavLink to="/categories/category1" className="btn btn-info">Shop</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories;