import {useState} from 'react';

function CarMultBgChangeColor() {

    const [text, setText] = useState('');
    const cars = ['bmw', 'audi', 'vw', 'kia', 'toyota'];

    let bg1 = 'white';
    let bg2 = 'white';
    let bg3 = 'white';
    let bg4 = 'white';
    let bg5 = 'white';

    const findText = (event) => {
        setText(event.target.value);
    }

    const textSplit = text.split(' ');

    for (let word of textSplit) {
        switch (word) {
            case 'bmw':
                bg1 = 'red';
                break;
            case 'audi':
                bg2 = 'red';
                break;
            case 'vw':
                bg3 = 'red';
                break;
            case 'kia':
                bg4 = 'red';
                break;
            case 'toyota':
                bg5 = 'red';
                break;
        }
    }
    

    return (
        <div>
            <h1>Task 7 - Cars and Multiple Background Color</h1>
            <ul>
                <li style={{backgroundColor: bg1}}>{cars[0]}</li>
                <li style={{backgroundColor: bg2}}>{cars[1]}</li>
                <li style={{backgroundColor: bg3}}>{cars[2]}</li>
                <li style={{backgroundColor: bg4}}>{cars[3]}</li>
                <li style={{backgroundColor: bg5}}>{cars[4]}</li>
            </ul>
            <input type="text" onChange={findText}/>
        </div>
    )
}

export default CarMultBgChangeColor;