import './styles/Home.scss';
import { Link } from 'react-router-dom';
import ProgramsCards from '../components/ProgramsCards';

export default function Home() {
  return (
    <div className='home'>
      <div className='home__overlay'>
        <section className='home__header-text'>
          <h1>Welcome to Master D. Choi Taekwondo!</h1>
          <h2>Now serving Richmond, Texas</h2>
          <Link to='/contact-us'>
            <button>Click to contact us!</button>
          </Link>
        </section>
      </div>
      <div className='our-programs'>
        <header>
          <h1>Our Programs</h1>
        </header>
        <ProgramsCards />
      </div>
    </div>
  );
}