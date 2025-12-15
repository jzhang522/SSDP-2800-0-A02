import { Routes, Route, Link } from "react-router-dom";
import { WeatherProvider } from "./components/WeatherProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Currency from "./pages/Currency";
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";

function App() {
    return (
        <WeatherProvider>
            <div className="app-container"> 
                <Header />
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
            <Footer />
        </WeatherProvider>
    );
}

export default App;