import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.scss";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello</h1>
      </div>
    </Router>
  );
}

export default App;
