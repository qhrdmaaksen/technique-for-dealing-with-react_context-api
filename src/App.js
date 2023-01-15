import logo from './logo.svg';
import './App.css';
import ColorBox from "./contexts/ColorBox";
import ColorContext from './contexts/Color';

function App() {
  return (
      <ColorContext.Provider value={{color: 'red'}}>
        <ColorBox />
      </ColorContext.Provider>
  )
}

export default App;
