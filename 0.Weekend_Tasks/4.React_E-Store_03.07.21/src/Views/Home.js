import { NavLink } from 'react-router-dom';
import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy2.jpeg';
import Toy3 from '../Images/toy3.jpeg';

function Home() {

    return (
        <div>
            <h1 className='text-center my-3'>Here will be Carousel</h1>
            <div className="container text-center mb-5">
                <div className="row">
                    <div className="col mx-1">
                        <div className="row">
                            <div className="col card align-self-stretch">
                                <img className='img-fluid' src={Toy1} alt="Totoro" />
                                <div className="card-body">
                                    <h5 className="card-title">Totoro</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="/categories" className="btn btn-info">Shop</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mx-1">
                        <div className="row">
                            <div className="col card align-self-stretch">
                                <img className='img-fluid' src={Toy2} alt="SpiritedAway" />
                                <div className="card-body">
                                    <h5 className="card-title">Spirited Away</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="/categories" className="btn btn-info">Shop</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mx-1">
                        <div className="row">
                            <div className="col card align-self-stretch">
                                <img className='img-fluid' src={Toy3} alt="HowlsMovingCastle" />
                                <div className="card-body">
                                    <h5 className="card-title">Howl's Moving Castle</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="/categories" className="btn btn-info">Shop</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;