import Header from '../components/Header';
import './styles/ContactUs.scss';

export default function ContactUs() {
  return (
    <div className='contact-us'>
      <Header text={'Contact Us'} />
      <div className='contact-us__top'>
        <section className='contact-us__top--left'>
          <div className='hours'>
            <h3>Hours</h3>
            <div className='hours--info'>
              <p>
                <span>
                  <b>Monday - Friday</b>
                </span>
                <span>2 PM - 9 PM</span>
              </p>
              <p>
                <span>
                  <b>Saturday</b>
                </span>
                <span>9 AM - 1 PM</span>
              </p>
              <p>
                <span>
                  <b>Sunday</b>
                </span>
                <span>Closed</span>
              </p>
            </div>
          </div>
          <div className='address'>
            <h3>Address</h3>
            <p>
              <a
                href='https://goo.gl/maps/UXEWZ2Ryi2AHWXwx9'
                target='_blank'
                rel='noreferrer'
              >
                18310 W Airport Blvd Suite 700, Richmond, TX 77407
              </a>
            </p>
          </div>
          <div className='call'>
            <h3>Call</h3>
            <p>
              <a href='tel:832-282-8633'>(832) 282-8633</a>
            </p>
          </div>
        </section>
        <section className='contact-us__top--right'>
          <h3>Message</h3>
          <div className='input-container'>
            <div className='input-container__name'>
              <label for='name'>Name</label>
              <input type='text' id='name' />
            </div>
            <div className='input-container__contact'>
              <label for='contact'>Phone Number or Email</label>
              <input type='text' id='contact' />
            </div>
            <div className='input-container__message'>
              <label for='message'>Message</label>
              <textarea id='message' rows="7" />
            </div>
            <input type='submit' class="submit" />
          </div>
        </section>
      </div>
      <div className='contact-us__google-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.341667012122!2d-95.7034563!3d29.651858299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e14b3c251c25%3A0x2413a27871aef121!2sMaster%20D%20Choi&#39;s%20World%20Champion%20Taekwondo!5e0!3m2!1sen!2sus!4v1657931703892!5m2!1sen!2sus'
          style={{ border: '0' }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          title='Google Map'
        ></iframe>
      </div>
    </div>
  );
}
