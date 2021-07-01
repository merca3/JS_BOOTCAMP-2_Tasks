function PrintOddNumbers() {
    const oddNumbers = [];

    for (let i = 0; i < 100; i++) {
        if (i % 2 != 0) {
            oddNumbers.push(<li key={i}> - {i}</li>);
        }
    }
    // for (let i = 1; i < 100; i += 2) {
    //         oddNumbers.push(<li> - {i}</li>);
    // }

    return (
        <div>
            <h1>Task 1 - Odd Numbers</h1>
            <ol>
                {oddNumbers}
            </ol>
        </div>
    )
}

export default PrintOddNumbers;