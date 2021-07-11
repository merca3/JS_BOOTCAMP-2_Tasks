import { NavLink } from 'react-router-dom';

import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy2.jpeg';
import Toy3 from '../Images/toy3.jpeg';
import Toy4 from '../Images/toy4.jpg';
import Toy5 from '../Images/toy5.jpg';
import Toy6 from '../Images/toy6.jpg';
import ToyMain from '../Images/toy2.jpg';

function Category1() {

    return (
        <div className="container mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-3">
                    <li className="breadcrumb-item">
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li className="breadcrumb-item">
                        <NavLink exact to='/categories'>Categories</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Categories</li>
                </ol>
            </nav>
            <h2 className="my-3">Category1</h2>
            <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                    <img className="img-fluid rounded" src={ToyMain} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-lg-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium incidunt, dolore earum odit voluptatem consectetur. Alias nulla assumenda, voluptatibus consequuntur eius ipsam id incidunt debitis iste accusamus magnam, rem fugit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis voluptate vel sequi qui magni, porro delectus rerum nemo fuga cum maxime ipsa quam in consequatur tenetur voluptatem, voluptates dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi natus vitae at fugiat doloremque commodi obcaecati. Veritatis distinctio quia repellendus harum, vero fugit, debitis est eos perferendis obcaecati corrupti?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis dicta, esse cumque suscipit consequuntur atque accusantium ipsam incidunt, laudantium aspernatur at, corrupti rerum inventore similique dolorum voluptas animi dolore.
                </div>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 text-center mb-2">
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy3} alt="" />
                        <div>
                            <h6>Product1</h6>
                            <h6>5.99$</h6>
                        </div>
                    </NavLink>

                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy2} alt="" />
                        <div>
                            <h6>Product2</h6>
                            <h6>6.99$</h6>
                        </div>
                    </ NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy1} alt="" />
                        <div>
                            <h6>Product3</h6>
                            <h6>9.49$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy4} alt="" />
                        <div>
                            <h6>Product4</h6>
                            <h6>6.95$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy5} alt="" />
                        <div>
                            <h6>Product5</h6>
                            <h6>5.99$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy6} alt="" />
                        <div>
                            <h6>Product6</h6>
                            <h6>10.99$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy4} alt="" />
                        <div>
                            <h6>Product7</h6>
                            <h6>6.95$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy5} alt="" />
                        <div>
                            <h6>Product8</h6>
                            <h6>5.99$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy6} alt="" />
                        <div>
                            <h6>Product9</h6>
                            <h6>10.99$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy3} alt="" />
                        <div>
                            <h6>Product10</h6>
                            <h6>5.99$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy2} alt="" />
                        <div className="align-self-end">
                            <h6>Product11</h6>
                            <h6>6.99$</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col rounded border">
                    <NavLink className="nav-link" exact to="/categories/category1/product1">
                        <img className="img-fluid" src={Toy1} alt="" />
                        <div className="align-items-end">
                            <h6>Product12</h6>
                            <h6>9.49$</h6>
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Category1;