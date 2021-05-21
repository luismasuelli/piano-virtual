import { useState } from 'react';
import Piano from './Piano';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  return started ? (
    <div className="App">
      <Piano/>
    </div>
  ) : (
    <div className="App">
      <button className="App-button" onClick={() => setStarted(true)}>Iniciar</button>
    </div>
  );
}

export default App;
