import { useState } from 'react';

function TextColorBox() {
    const [color, setColor] = useState('grey');
    const [text, setText] = useState('');

    const changeText = (event) => {
        setText(event.target.value);
        if (text == 'red') {
            setColor('red');
        } else if (text == 'blue') {
            setColor('blue');
        } else if (text == 'yellow') {
            setColor('yellow');
        } else {
            setColor('grey');
        } 
    }

    return (
        <div>
            <h1>Task 5</h1>
            <div>
                <input onChange={changeText}/>
            </div>
            <div>
                <input disabled style={{backgroundColor: color, width: '100px', height: '100px'}}/>
            </div>
        </div>
    )
}

export default TextColorBox;