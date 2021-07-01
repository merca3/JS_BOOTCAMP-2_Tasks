import {useState} from 'react';

function AddToTheList() {
    const [text, setText] = useState('');
    const [listAdded, setListAdded] = useState([
        'Apple',
        'Banana',
        'Kiwi',
    ]);

    const changeText = (event) => {
        setText(event.target.value);
    }

    const addItemToTheList = () => {
        if (text === '') {
            alert('Please fill the list item');
            return;
        }
        setListAdded([...listAdded, text]);
        setText('');
    }

    return (
        <div>
            <h1>Task 4 - Add To The List</h1>
            <ul>
                {listAdded.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <div>
                <input type="text" value={text} onChange={changeText} />
            </div>
            <div>
                <button onClick={addItemToTheList}>Add to the list</button>
            </div>
        </div>
    )
}

export default AddToTheList;