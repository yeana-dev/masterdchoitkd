import { useState } from 'react';
import Header from '../components/Header';
import './styles/ContactUs.scss';

import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [btnText, setBtnText] = useState('Submit');

  const emailParams = {
    name: name,
    email: email,
    message: message,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailParams);
    emailjs
      .send(
        'service_iiwc60s',
        'template_2tmy79s',
        emailParams,
        'user_YOH18ApgTgggDNs7eGZD9'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setBtnText('Sent');
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }

  return (
    <div className='contact-us'>
      <Header text={'Contact Us'} />
      <div className='contact-us__top'>
        <section className='contact-us__top--left'>
          <div className='hours'>
            <h3>Hourss</h3>
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
              <a href='tel:346-350-5868'>(346) 350-5868</a>
            </p>
          </div>
        </section>
        <section className='contact-us__top--right'>
          <h3>Message</h3>
          <form className='input-container' onSubmit={(e) => handleSubmit(e)}>
            <div className='input-container__name'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='input-container__contact'>
              <label htmlFor='contact'>Email Address</label>
              <input
                type='email'
                id='email'
                name='email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-container__message'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                rows='7'
                name='message'
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <input type='submit' className={`submit ${btnText}`} value={btnText} />
          </form>
        </section>
      </div>
      <div className='contact-us__google-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.341667012122!2d-95.7034563!3d29.651858299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e14b3c251c25%3A0x2413a27871aef121!2sMaster%20D%20Choi&#39;s%20World%20Champion%20Taekwondo!5e0!3m2!1sen!2sus!4v1657931703892!5m2!1sen!2sus'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Google Map'
        ></iframe>
      </div>
    </div>
  );
}
