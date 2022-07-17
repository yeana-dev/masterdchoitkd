import logo from '../assets/logo_title.png';
import './styles/Navigation.scss';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
      </div>
      <div className='navbar__menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/programs'>Programs</Link>
          </li>
          <li>
            <Link to='/schedule'>Schedule</Link>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
