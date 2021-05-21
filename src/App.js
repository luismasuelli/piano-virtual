import Piano from './Piano';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" tabIndex="0" onKeyDown={(e) => console.log(e)}>
      <Piano/>
    </div>
  );
}

export default App;
