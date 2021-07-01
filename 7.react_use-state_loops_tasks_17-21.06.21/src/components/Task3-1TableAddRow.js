import {useState} from 'react';

function AddRow() {
    const [tableRowsToAdd, setTableRowsToAdd] = useState(0);
    const [tableContent, setTableContent] = useState('');
    const rowsToAdd = [];

    const addRowBtn = () => {
        setTableRowsToAdd(tableRowsToAdd + 1);
        for (let i = 0; i <= tableRowsToAdd; i++) {
            rowsToAdd.push(<tr key={i}><td>Row{i+3} cell1</td><td>Row{i+3} cell2</td></tr>)
            setTableContent(rowsToAdd);
        }
    }

    return (
        <div>
            <h1>Task 3 - Add Row To A Table</h1>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>Row1 cell1</td>
                        <td>Row1 cell2</td>
                    </tr>
                    <tr>
                        <td>Row2 cell1</td>
                        <td>Row2 cell2</td>
                    </tr>
                    {tableContent}
                </tbody>
            </table>
            <div>
                <button onClick={addRowBtn}>Add Row</button>
            </div>
        </div>
    )
}

export default AddRow;