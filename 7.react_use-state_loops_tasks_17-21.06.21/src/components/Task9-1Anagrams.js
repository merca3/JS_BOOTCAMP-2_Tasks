import {useState} from 'react';

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

    const text1Sorted = text1.toLowerCase().replace(/ /g, '').split('').sort().join('');
    const text2Sorted = text2.toLowerCase().replace(/ /g, '').split('').sort().join('');

    if (text1Sorted !== '' && text2Sorted !== '') {
        if (text1Sorted === text2Sorted) {
            displayText = <h3 style={{color: 'green'}}>Inputs ARE anagrams!</h3>;
        } 
        if (text1Sorted !== text2Sorted) {
            displayText = <h3 style={{color: 'red'}}>Inputs are NOT anagrams!</h3>;
        }
    }

    

    return (
        <div>
            <h1>Task 9 - Anagrams</h1>
            {displayText}
            <input type="text" onChange={findText1}/>
            <input type="text" onChange={findText2}/>
        </div>
    )
}

export default Anagram;