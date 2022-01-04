import React, {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0)
  const [names, setNames] = useState(['João', 'Maria', 'Pedro', 'Mateus', 'Silva'])
  const initialNames = ['João', 'Maria', 'Pedro', 'Mateus', 'Silva']

  function plusOne() {
    setCounter(counter + 1)
  }

  function minusOne() {
    setCounter(counter - 1)
  }

  function resetCounter() {
    setCounter(0)
    setNames(initialNames)
  }

  function deleteName(element) {
    const prevNames = [...names];
    setNames(prevNames.filter(e => e !== element))
  }

  function Namelist({element}) {
    return (
      <li>{element} <button onClick={() => deleteName(element)}>x</button></li>
    )
  }

  function NewNames() {
    const [newName, setNewName] = useState();
    const oldnames = [...names]
    return (
      <div>

        <label htmlFor="name">Add new name</label>
        <input id="name" name="name" type='text' onChange={(e) => {
          setNewName(e.target.value)
        }}/>
        <button onClick={() => setNames([...oldnames, newName]) }>Add Name</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
      <button onClick={resetCounter}>reset</button>
      {names.map(e => <Namelist key={e} element={e}/>)}
      <NewNames />
    </div>
  );
}



export default App;
