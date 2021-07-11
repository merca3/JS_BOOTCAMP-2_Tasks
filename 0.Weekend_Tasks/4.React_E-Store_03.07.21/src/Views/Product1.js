import { SRLWrapper } from "simple-react-lightbox";
import {useState} from "react";
import {NavLink} from "react-router-dom";

import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy2.jpeg';
import Toy3 from '../Images/toy3.jpeg';
import Toy4 from '../Images/toy4.jpg';
import Toy5 from '../Images/toy5.jpg';
import Toy6 from '../Images/toy6.jpg';
import ToyMain from '../Images/toy3.jpeg';

function Product1() {
    const [mainImg, setMainImg] = useState(ToyMain);

    const changeMainImg = (event) => {
        setMainImg(event.target.src);
    }

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
                    <li className="breadcrumb-item">
                        <NavLink exact to='/categories/category1'>Category 1</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Categories</li>
                </ol>
            </nav>
            <h2 className="my-3">Product 1</h2>
            <div className="row">
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="row">
                        <img className="img-fluid" src={mainImg} alt="" />
                    </div>
                    <SRLWrapper>
                        <div className="row">
                            <div className="col">
                                <img className="img-fluid" style={{cursor: 'pointer'}} src={Toy1} onMouseEnter={changeMainImg} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" style={{cursor: 'pointer'}} src={Toy2} onMouseEnter={changeMainImg} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" style={{cursor: 'pointer'}} src={Toy3} onMouseEnter={changeMainImg} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="img-fluid" style={{cursor: 'pointer'}} src={Toy4} onMouseEnter={changeMainImg} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" style={{cursor: 'pointer'}} src={Toy5} onMouseEnter={changeMainImg} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" style={{cursor: 'pointer'}} src={Toy6} onMouseEnter={changeMainImg} alt="" />
                            </div>
                        </div>
                    </SRLWrapper>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil. Optio eos eligendi repellendus perferendis eveniet, quas vitae explicabo aperiam libero illum provident suscipit a error necessitatibus exercitationem nam cumque!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga! Corrupti quia sunt iusto quidem hic quasi soluta optio a ipsum ipsam aliquam temporibus, nostrum atque deleniti similique praesentium obcaecati?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel minus illo debitis praesentium optio, recusandae aliquid ducimus sunt dolores voluptatem. Tempore facilis perspiciatis fugit praesentium quis in expedita porro!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil. Optio eos eligendi repellendus perferendis eveniet, quas vitae explicabo aperiam libero illum provident suscipit a error necessitatibus exercitationem nam cumque!</p>
                    <h3>25$</h3>
                    <button className="btn btn-info my-3" onClick={() => alert('Item was added to the cart!')}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product1;