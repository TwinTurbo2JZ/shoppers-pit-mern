import { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./views/screens/home/home.screen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
