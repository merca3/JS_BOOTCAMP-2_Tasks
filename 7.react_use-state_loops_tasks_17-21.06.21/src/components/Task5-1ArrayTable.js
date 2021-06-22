
function MakeArrayTable() {

    let array = [];
    for (let i = 1; i < 6; i++) {
        let arrayInside = [];
        for (let j = 1; j < 6; j++) {
            arrayInside.push(` Foo${i}-${j} `);
        }
        array.push(<div>{arrayInside}</div>);
    }

    return (
        <div>
            <h1>Task 5 - Array/Matrix Table</h1>
            <div>
                {array}
            </div>
        </div>
    )
}

export default MakeArrayTable;