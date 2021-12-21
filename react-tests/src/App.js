import React, {useState} from 'react'
import Counter from './Counter'
export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')


  return(
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      <Counter />
      <button onClick={() => setTheme(prevTheme => 
       { return prevTheme === 'red' ? 'blue' : 'red'})}>
         The theme is {theme}
      </button>
    </ThemeContext.Provider>
  )

}

export default App;
