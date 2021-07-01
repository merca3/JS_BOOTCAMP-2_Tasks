import {useState} from 'react';

function ShowChangeCellValue() {

    return (
        <div>
            <h1>Task 10 - Show/Change Cell Value</h1>
            <div>
                <table border='1'>
                    <tr>
                        <td>Row1 cell1</td>
                        <td>Row1 cell2</td>
                        <td>Row1 cell3</td>
                        <td>Row1 cell4</td>
                        <td>Row1 cell5</td>
                    </tr>
                    <tr>
                        <td>Row2 cell1</td>
                        <td>Row2 cell2</td>
                        <td>Row2 cell3</td>
                        <td>Row2 cell4</td>
                        <td>Row2 cell5</td>
                    </tr>
                    <tr>
                        <td>Row3 cell1</td>
                        <td>Row3 cell2</td>
                        <td>Row3 cell3</td>
                        <td>Row3 cell4</td>
                        <td>Row3 cell5</td>
                    </tr>
                    <tr>
                        <td>Row4 cell1</td>
                        <td>Row4 cell2</td>
                        <td>Row4 cell3</td>
                        <td>Row4 cell4</td>
                        <td>Row4 cell5</td>
                    </tr>
                    <tr>
                        <td>Row5 cell1</td>
                        <td>Row5 cell2</td>
                        <td>Row5 cell3</td>
                        <td>Row5 cell4</td>
                        <td>Row5 cell5</td>
                    </tr>
                </table>
            </div>
            <br />
            <div>
                <label>Choose Row</label>
                <select>
                    <option value="">Row 1</option>
                    <option value="">Row 2</option>
                    <option value="">Row 3</option>
                    <option value="">Row 4</option>
                    <option value="">Row 5</option>
                </select>
            </div>
            <div>
                <label>Choose Column</label>
                <select>
                    <option value="">Column 1</option>
                    <option value="">Column 2</option>
                    <option value="">Column 3</option>
                    <option value="">Column 4</option>
                    <option value="">Column 5</option>
                </select>
            </div>
            <br />
            <div>
                <input type="text" placeholder="Enter New Text" />
            </div>
            <div>
                <button>Change Cell Text!</button>
            </div>
        </div>
    )
}

export default ShowChangeCellValue;