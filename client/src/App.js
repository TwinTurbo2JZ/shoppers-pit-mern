import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.scss";

////////////////page imports
import HomeScreen from "./components/Screens/HomeScreen";
//////component imports
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>gg</h1>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
