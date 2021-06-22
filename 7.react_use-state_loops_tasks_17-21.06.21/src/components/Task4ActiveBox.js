import { useState } from 'react';
import './Task4.css';

function ChangeActiveBox() {
    const [activeBlockNumber, setActiveBlockNumber ] = useState(1);

    let bg1 = 'blue';
    let bg2 = 'blue';
    let bg3 = 'blue';
    let bg4 = 'blue';
    let bg5 = 'blue';

    switch (activeBlockNumber) {
        case 1:
            bg1 = 'red';
            break;
        case 2:
            bg2 = 'red';
            break;
        case 3:
            bg3 = 'red';
            break;
        case 4:
            bg4 = 'red';
            break;
        case 5:
            bg5 = 'red';
            break;
    }

    const clickLeft = () => {
        let number = activeBlockNumber - 1;
        if (number < 1) {
            number = 1;
        }
        setActiveBlockNumber(number);
    }

    const clickRight = () => {
        let number = activeBlockNumber + 1;
        if (number > 5) {
            number = 5;
        }
        setActiveBlockNumber(number);
    }

    return (
        <div>
            <h1>Task 4</h1>
            <div className="box-wrapper">
                <div className="blue-box" style={{backgroundColor: bg1}}></div>
                <div className="blue-box" style={{backgroundColor: bg2}}></div>
                <div className="blue-box" style={{backgroundColor: bg3}}></div>
                <div className="blue-box" style={{backgroundColor: bg4}}></div>
                <div className="blue-box" style={{backgroundColor: bg5}}></div>
            </div>
            <div>
                <button onClick={clickLeft}>Left</button>
                <button onClick={clickRight}>Right</button>  
            </div>
        </div>
    )
}

export default ChangeActiveBox;