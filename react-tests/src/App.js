import logo from './logo.svg';
import './App.css';

let mycounter = 0;

function counterUp(e) {
  mycounter++;
  console.log(mycounter);
}

function App() {
  return (
    <div className="App">
      {mycounter}
      <button onClick={counterUp}>counter</button>
    </div>
  );
}

export default App;
