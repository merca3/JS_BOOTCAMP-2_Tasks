import Toy1 from '../Images/toy1.jpg';
import Toy2 from '../Images/toy2.jpeg';
import Toy3 from '../Images/toy3.jpeg';
import Toy4 from '../Images/toy4.jpg';
import Toy5 from '../Images/toy5.jpg';
import Toy6 from '../Images/toy6.jpg';
import ToyMain from '../Images/toy2.jpg';

function Product1() {

    return (
        <div className="container mb-5">
            <h2 className="my-3">Product 1</h2>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <img className="img-fluid" src={ToyMain} alt="" />
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid" src={Toy1} alt="" />
                        </div>
                        <div className="col">
                            <img className="img-fluid" src={Toy2} alt="" />
                        </div>
                        <div className="col">
                            <img className="img-fluid" src={Toy3} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid" src={Toy4} alt="" />
                        </div>
                        <div className="col">
                            <img className="img-fluid" src={Toy5} alt="" />
                        </div>
                        <div className="col">
                            <img className="img-fluid" src={Toy6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil. Optio eos eligendi repellendus perferendis eveniet, quas vitae explicabo aperiam libero illum provident suscipit a error necessitatibus exercitationem nam cumque!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga! Corrupti quia sunt iusto quidem hic quasi soluta optio a ipsum ipsam aliquam temporibus, nostrum atque deleniti similique praesentium obcaecati?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel minus illo debitis praesentium optio, recusandae aliquid ducimus sunt dolores voluptatem. Tempore facilis perspiciatis fugit praesentium quis in expedita porro!</p>
                    <h3>25$</h3>
                    <button className="btn btn-info my-3">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product1;