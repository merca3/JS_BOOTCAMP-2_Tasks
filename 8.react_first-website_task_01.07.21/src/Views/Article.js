import {useState} from 'react';
import Cat1 from '../Images/cat1.jpg';
import Cat2 from '../Images/cat2.png';
import Cat3 from '../Images/cat3.jpg';
import Cat4 from '../Images/cat4.jpg';
import Cat5 from '../Images/cat5.jpg';
import Cat6 from '../Images/cat6.jpg';

function Article() {

    const [mainPic, setMainPic] = useState(Cat1);
    // const catImages = [Cat1, Cat2, Cat3, Cat4, Cat5, Cat6];

    const updateMainPic = (event) => {
        setMainPic(event.target.src);
    }

    return (
        <div className="container">
            <h2 className="my-3">Some pretty cool article</h2>
            <div className="row">
                <div className="col col-12 col-md-5">
                    <div className="row">
                        <img src={mainPic} className="img-fluid" alt="catMain" />
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <img src={Cat2} className="img-fluid" style={{cursor: 'pointer'}} alt="cat2"onClick={updateMainPic} />
                        </div>
                        <div className="col">
                            <img src={Cat3} className="img-fluid" style={{cursor: 'pointer'}} alt="cat3" onClick={updateMainPic} />
                        </div>
                        <div className="col">
                            <img src={Cat4} className="img-fluid" style={{cursor: 'pointer'}} alt="cat4" onClick={updateMainPic} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={Cat5} className="img-fluid" style={{cursor: 'pointer'}} alt="cat5" onClick={updateMainPic} />
                        </div>
                        <div className="col">
                            <img src={Cat6} className="img-fluid" style={{cursor: 'pointer'}} alt="cat6" onClick={updateMainPic} />
                        </div>
                        <div className="col">
                            <img src={Cat1} className="img-fluid" style={{cursor: 'pointer'}} alt="cat1" onClick={updateMainPic} />
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-md-7">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut quasi quaerat. Architecto ex assumenda facere fuga voluptatibus, quisquam impedit incidunt earum porro doloribus nihil minima! Dolorum magnam reprehenderit ducimus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut quasi quaerat. Architecto ex assumenda facere fuga voluptatibus, quisquam impedit incidunt earum porro doloribus nihil minima! Dolorum magnam reprehenderit ducimus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut quasi quaerat. Architecto ex assumenda facere fuga voluptatibus, quisquam impedit incidunt earum porro doloribus nihil minima! Dolorum magnam reprehenderit ducimus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut quasi quaerat. Architecto ex assumenda facere fuga voluptatibus, quisquam impedit incidunt earum porro doloribus nihil minima! Dolorum magnam reprehenderit ducimus.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Article;