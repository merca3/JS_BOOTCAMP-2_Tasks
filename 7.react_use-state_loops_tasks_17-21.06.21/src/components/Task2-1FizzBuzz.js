function FizzBuzz() {

    const resultArray = [];

    for (let i = 1; i < 101; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            resultArray.push(<li key={i}> - FizzBuzz</li>);
        } else if (i % 3 === 0) {
            resultArray.push(<li key={i}> - Buzz</li>);
        } else if (i % 2 === 0) {
            resultArray.push(<li key={i}> - Fizz</li>);
        } else {
            resultArray.push(<li key={i}> - {i}</li>);
        }
    }

    return (
        <div>
            <h1>Task 2 - Fizz Buzz</h1>
            <ol>
                {resultArray}
            </ol>
        </div>
    )
}

export default FizzBuzz;