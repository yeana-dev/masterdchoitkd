import './styles/Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <section className='footer-menu__left'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Schedule</li>
            <li>Contact Us</li>
          </ul>
          <p className="copyright">Copyright © Master D. Choi Taekwondo 2022. All rights reserved.</p>
        </section>
        <section className='footer-menu__right'>
          <h2>Master D. Choi Taekwondo</h2>
          <p>123 Your Street #123 Houston, TX 12345</p>
          <p>(123) 123-4567</p>
          <p>info@masterdchoi.com</p>
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