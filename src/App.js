import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
