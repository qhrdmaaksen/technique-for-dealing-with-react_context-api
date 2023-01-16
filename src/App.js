import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./contexts/ColorBox";
import { ColorProvider } from "./contexts/Color";
import SelectColors from "./contexts/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
