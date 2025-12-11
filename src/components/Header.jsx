import mylogo from '../assets/logo.png';
import Navigation from './Navigation';

function Header() {
    return (
        <header>
            <div>
                <img src={mylogo} alt="Logo" />
                <h1>WEATHER SITE NAME TO FOLLOW</h1>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;