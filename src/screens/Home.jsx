import './styles/Home.scss';
import { Link } from 'react-router-dom';

import adult from '../assets/adult.jpg';
import family from '../assets/family.jpg';
import little_tiger from '../assets/little_tiger.jpg';
import youth from '../assets/youth.jpg';

export default function Home() {
  return (
    <div className='home'>
      <div className='home__overlay'>
        <section className='home__header-text'>
          <h1>Welcome to Master D. Choi Taekwondo!</h1>
          <h2>Coming to Richmond, TX</h2>
          <Link to='/contact-us'>
            <button>Click to contact us!</button>
          </Link>
        </section>
      </div>
      <div className='our-programs'>
        <header>
          <h1>Our Programs</h1>
        </header>
        <section className='our-programs__card-container'>
          <div className='program-card'>
            <img src={little_tiger} alt='little tiger' />
            <h2>Little Tiger</h2>
            <section>
              <p>
                The ages between 4 and 5 are some of the most important years of
                a child’s development. We focus on confidence, self control,
                behavior, and improving following directions.
              </p>
              {/* <button>Learn More</button> */}
            </section>
          </div>
          <div className='program-card'>
            <img src={youth} alt='little tiger' />
            <h2>Youth</h2>
            <section>
              <p>
                Youth program helps kids develop physically, mentally and
                emotionally by practicing positive habits. Kids gain confidence,
                self-discipline, self control, focus, self defense, and learn to
                never give up to reach for success!
              </p>
              {/* <button>Learn More</button> */}
            </section>
          </div>
          <div className='program-card'>
            <img src={adult} alt='little tiger' />
            <h2>Adult</h2>
            <section>
              <p>
                In addition to the physical health improvements, Taekwondo is
                also known to benefit mental health through increased
                confidence, improved self-esteem, focus, and self-discipline.
                Improved flexibility, improved agility and reflexes.
              </p>
              {/* <button>Learn More</button> */}
            </section>
          </div>
          <div className='program-card'>
            <img src={family} alt='little tiger' />
            <h2>Family</h2>
            <section>
              <p>
                Sharing physical activities with your kids, parents, and
                siblings is not just a fun way to get your heart pumping. It's
                also a great way to build family bonds, and a great Taekwondo
                program provides the perfect opportunity to share the many
                benefits Taekwondo offers for families.
              </p>
              {/* <button>Learn More</button> */}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}