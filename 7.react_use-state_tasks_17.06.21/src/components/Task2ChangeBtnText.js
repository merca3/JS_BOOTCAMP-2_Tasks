import { useState } from 'react';

function ChangeBtnText() {
    const [text, setText] = useState('Foo');

    const changeText = () => {
        if (text == 'Foo') {
            setText('Bar');
        }
        if (text == 'Bar') {
            setText('Baz');
        }
        if (text == 'Baz') {
            setText('Foo');
        }
    }

    return (
        <div>
            <h1>Task 2</h1>
            <button onClick={changeText}>{text}</button>
        </div>
    )
}

export default ChangeBtnText;