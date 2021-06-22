import PrintOddNumbers from "./components/Task1-1OddNumbers";
import ShowChangeCellValue from "./components/Task10-1ShowChangeCellValue";
import ChangeColorText from "./components/Task1ChangeColorText";
import FizzBuzz from "./components/Task2-1FizzBuzz";
import ChangeBtnText from "./components/Task2ChangeBtnText";
import AddRow from "./components/Task3-1TableAddRow";
import ATM from './components/Task3ATM';
import AddToTheList from "./components/Task4-1ListInput";
import ChangeActiveBox from "./components/Task4ActiveBox";
import MakeArrayTable from "./components/Task5-1ArrayTable";
import TextColorBox from "./components/Task5TextColorBox";
import CarBgChangeColor from "./components/Task6-1CarsBgColor";
import CarMultBgChangeColor from "./components/Task7-1CarsMultBgColor";
import CarFoundOrNot from "./components/Task8-1CarFoundOrNot";
import Anagram from "./components/Task9-1Anagrams";

function App() {
    return ( 
      <div >
        {/* <ChangeColorText />
        <ChangeBtnText />
        <ATM />
        <ChangeActiveBox />
        <TextColorBox /> */}
        <PrintOddNumbers />
        <FizzBuzz />
        <AddRow />
        <AddToTheList />
        <MakeArrayTable />
        <CarBgChangeColor />
        <CarMultBgChangeColor />
        <CarFoundOrNot />
        <Anagram />
        <ShowChangeCellValue />
      </div>
    );
}

export default App;