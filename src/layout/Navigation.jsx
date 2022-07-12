import logo from '../assets/logo_title.png';
import './styles/Navigation.scss';

export default function Navigation() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='navbar__menu'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Schedule</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
