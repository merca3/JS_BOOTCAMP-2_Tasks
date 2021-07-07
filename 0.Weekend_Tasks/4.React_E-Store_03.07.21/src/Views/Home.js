import { NavLink } from 'react-router-dom';
import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy2.jpeg';
import Toy3 from '../Images/toy3.jpeg';
import Toy4 from '../Images/toy4.jpg';
import Toy5 from '../Images/toy5.jpg';
import Toy6 from '../Images/toy6.jpg';

function Home() {

    return (
        <div className="container text-center mb-5">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Toy4} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Toy5} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Toy6} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col mx-1">
                    <div className="row">
                        <div className="col card">
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
                        <div className="col card">
                            <img className='img-fluid' src={Toy2} alt="SpiritedAway" />
                            <div className="card-body">
                                <h5 className="card-title">Spirited Away</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/categories" className="btn btn-info">Shop</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mx-1 ">
                    <div className="row">
                        <div className="col card">
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
    )
};

export default Home;