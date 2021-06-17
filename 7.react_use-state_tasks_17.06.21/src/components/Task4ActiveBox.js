import { useState } from 'react';

function ChangeActiveBox() {
    const [color, setColor] = useState('blue');

    const changeLeftColor = () => {

    }
    const changeRightColor = () => {
        
    }

    return (
        <div>
            <h1>Task 4</h1>
            <div>
                <input disabled style={{backgroundColor: color, width: '100px', height: '100px'}}/>
                <input disabled style={{backgroundColor: color, width: '100px', height: '100px'}}/>
                <input disabled style={{backgroundColor: color, width: '100px', height: '100px'}}/>
                <input disabled style={{backgroundColor: color, width: '100px', height: '100px'}}/>
                <input disabled style={{backgroundColor: color, width: '100px', height: '100px'}}/>
            </div>
            <button onClick={changeLeftColor}>Left</button>
            <button onClick={changeRightColor}>Right</button>
        </div>
    )
}

export default ChangeActiveBox;