import mylogo from '../assets/logo.png';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="app-header">
            <div>
                <img src={mylogo} alt="Logo" />
                <h1>Weather Comparison</h1>
                <p> Compare weather between two cities</p>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;