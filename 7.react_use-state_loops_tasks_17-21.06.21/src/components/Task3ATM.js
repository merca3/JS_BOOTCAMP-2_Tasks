import { useState } from 'react';

function ATM() {
    const [amount, setAmount] = useState(0);

    const minusFive = () => {
        setAmount(amount - 5);
    }
    const minusOne = () => {
        setAmount(amount - 1);
    }
    const plusOne = () => {
        setAmount(amount + 1);
    }
    const plusFive = () => {
        setAmount(amount + 5);
    }

    return (
        <div>
            <h1>Task 3</h1>
            <button onClick={minusFive}>-5</button>
            <button onClick={minusOne}>-1</button>
            <input disabled value={amount}/>
            <button onClick={plusOne}>+1</button>
            <button onClick={plusFive}>+5</button>
        </div>
    )
}

export default ATM;