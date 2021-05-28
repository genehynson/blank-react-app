import './App.css';
import {myFn} from './funcs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          blank-react-app
        </p>
        <p>
          edit <code>src/App.js</code> and save to reload
        </p>
        <p>
          myFn: {myFn()}
        </p>
      </header>
    </div>
  );
}

export default App;
