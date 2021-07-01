import {useState} from 'react';

function CarBgChangeColor() {

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

    switch (text) {
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

    return (
        <div>
            <h1>Task 6 - Cars and Background Color</h1>
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

export default CarBgChangeColor;

// Janis's version

// function Task6() {
//     const cars = ['vaz', 'gaz', 'zaz', 'maz', 'bmw'];
//     const [specialCarName, setSpecialCarName] = useState('');

//     const updateSpecialCarName = (event) => {
//         setSpecialCarName(event.target.value);
//     }

//     const carsElements = cars.map((car, index) => {
//         // let bgColor = 'none';
//         // if (car === specialCarName) {
//         //     bgColor = 'red';
//         // }
//         const bgColor = car === specialCarName ? 'red' : 'none';
        
//         return <li key={index} style={{background: bgColor}}>{car}</li>
//     })

//     return (
//         <div>
//             <h1>Task 6</h1>
//             <ul>
//                 {carsElements}
//             </ul>
//             <input value={specialCarName} onChange={updateSpecialCarName} />
//         </div>
//     )
// }

// export default Task6;