import {useState} from 'react';

function AddToTheList() {
    const [text, setText] = useState('');
    const [listAdded, setListAdded] = useState([]);

    const changeText = (event) => {
        setText(event.target.value);
    }

    const addItemToTheList = () => {
        setListAdded([...listAdded, text]);
    }

    return (
        <div>
            <h1>Task 4 - Add To The List</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Kiwi</li>
                <li>Cherry</li>
                {listAdded.map((item) => <li>{item}</li>)}
            </ul>
            <div>
                <input type="text" onChange={changeText} />
            </div>
            <div>
                <button onClick={addItemToTheList}>Add to the list</button>
            </div>
        </div>
    )
}

export default AddToTheList;