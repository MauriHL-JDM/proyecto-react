import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Headers from "./components/Headers";
import "./App.css";
import Filters from "./components/Filtros";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headers></Headers>
      <Filters></Filters>
    </>
  );
}

export default App;
