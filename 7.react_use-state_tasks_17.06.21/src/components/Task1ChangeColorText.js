import {useState} from 'react';

function ChangeColorText() {
    const [text, setText] = useState('Foo');
    const [color, setColor] = useState('red');

    const clickBtn = () => {
        if (text == 'Foo') {
            setText('Bar');
            setColor('blue')
        }
        if (text == 'Bar') {
            setText('Foo');
            setColor('red')
        }
    }

    return (
        <div>
            <h1>Task 1</h1>
            <h2 style={{color: color}}>{text}</h2>
            <button onClick={clickBtn}>Click Me!</button>
        </div>
    )
}

export default ChangeColorText;