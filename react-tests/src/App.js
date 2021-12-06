import StateLift from "./components/StateLift";
import {useState} from 'react'

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <h1>Rendering list</h1>
      <StateLift setName={setName}/>
      <p>{name}</p>
    </>

  );
}

export default App;
