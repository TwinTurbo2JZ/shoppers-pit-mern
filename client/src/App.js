import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.scss";

import { Provider } from "react-redux";

////////////////page imports
import HomeScreen from "./components/Screens/HomeScreen";
//////component imports
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
