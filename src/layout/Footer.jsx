import './styles/Footer.scss';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <section className='footer-menu__left'>
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
          <p className='copyright'>
            Copyright © Master D. Choi Taekwondo 2022. All rights reserved.
          </p>
        </section>
        <section className='footer-menu__right'>
          <h2>Master D. Choi Taekwondo</h2>
          <p>
            <a
              href='https://goo.gl/maps/UXEWZ2Ryi2AHWXwx9'
              target='_blank'
              rel='noreferrer'
            >
              18310 W Airport Blvd Suite 700, Richmond, TX 77407
            </a>
          </p>
          <p>
            <a href='tel:832-282-8633'>(832) 282-8633</a>
          </p>
          <p>
            <a
              href='mailto:info@masterdchoi.com'
              target='_blank'
              rel='noreferrer'
            >
              info@masterdchoi.com
            </a>
          </p>
          <h3>Hours</h3>
          <div>
            <p>
              <b>Monday - Friday</b> 2 PM - 9 PM
            </p>
            <p>
              <b>Saturday</b> 2 PM - 9 PM
            </p>
            <p>
              <b>Sunday</b> Closed
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}