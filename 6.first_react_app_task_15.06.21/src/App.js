import DisplayAge from './components/DisplayAge';
import DisplayEmail from './components/DisplayEmail';
import DisplayName from './components/DisplayName';

function App() {
    return ( 
      <div >
        <DisplayName name = "Mickey Mouse" />
        <DisplayAge age = "100" />
        <DisplayEmail email="mickey@mouse.com" />
      </div>
    );
}

export default App;