import {useState} from 'react';

function CarFoundOrNot() {

    const [text, setText] = useState('');
    const cars = ['bmw', 'audi', 'vw', 'kia', 'toyota'];

    let displayText = <h3 style={{color: 'red'}}>The car was not found</h3>;

    const findCar = (event) => {
        setText(event.target.value);
    }

    for (let car of cars) {
            if (car == text) {
                displayText = <h3 style={{color: 'green'}}>The car WAS found</h3>;
            }
        }

    return (
        <div>
            <h1>Task 8 - Car Found Or Not Found</h1>
            {displayText}
            <input type="text" onChange={findCar} />
        </div>
    )
}

export default CarFoundOrNot;