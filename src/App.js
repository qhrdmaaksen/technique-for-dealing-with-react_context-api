import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./contexts/ColorBox";
import { ColorProvider } from "./contexts/Color";

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
