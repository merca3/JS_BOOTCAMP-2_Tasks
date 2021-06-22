function PrintOddNumbers() {
    const oddNumbers = [];

    for (let i = 0; i < 101; i++) {
        if (i % 2 != 0) {
            oddNumbers.push(<li> - {i}</li>);
        }
    }

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