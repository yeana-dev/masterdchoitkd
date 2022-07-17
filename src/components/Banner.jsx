import './styles/Banner.scss';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner__overlay'>
        <section className='banner__header-text'>
          <h1>Welcome to Master D. Choi Taekwondo</h1>
          {/* <h2>Placeholder text goes here</h2> */}
          <Link to='/contact-us'>
            <button>Click to contact us!</button>
          </Link>
        </section>
      </div>
    </div>
  );
}