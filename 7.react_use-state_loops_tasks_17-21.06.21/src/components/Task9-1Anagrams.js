import {useState} from 'react';
import isAnagram from '../components/helpers/isAnagram';

function Anagram() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    let displayText = <h3>Please enter both inputs</h3>;

    const findText1 = (event) => {
        setText1(event.target.value);
    }
    const findText2 = (event) => {
        setText2(event.target.value);
    }

    if (isAnagram(text1, text2)) {
        displayText = <h3 style={{color: 'green'}}>Words ARE anagrams</h3>;
    } else {
        displayText = <h3 style={{color: 'red'}}>Words are NOT anagrams</h3>;
    }
    

    return (
        <div>
            <h1>Task 9 - Anagrams</h1>
            {displayText}
            <input type="text" value={text1} onChange={findText1}/>
            <input type="text" value={text2} onChange={findText2}/>
        </div>
    )
}

export default Anagram;