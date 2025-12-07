import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Currency from "./pages/Currency";
import "./App.css";

function App() {
    return (
        <div className="app-container"> 
            <div className="app-header">
                <h1>🌤️ Weather App</h1>
            </div>
            <nav>
                <Link to="/">Weather</Link>
                <Link to="/currency">Currency Exchange</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/currency" element={<Currency />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
}

export default App;
