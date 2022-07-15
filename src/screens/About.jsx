import './styles/About.scss';
import Header from '../components/Header';

import masterdchoi from '../assets/masterdchoi.jpeg';

export default function About() {
  return (
    <div className='about'>
      <Header text={"About Us"} />
      <main>
        <div className='image-container'>
          <img src={masterdchoi} alt='Portrait of Master D. Choi' />
        </div>
        <section>
          <div className='bio-container'>
            <h2>Master D. Choi</h2>
            <p>
              Master D Choi has been spending in TKD field more than 20 years
              and had been recognized as tops, winning many medals and trophies
              as a competitor. Working and training at one of the best and most
              recognized TKD schools in United States, Master Lee’s WCTKD,
              Master D Choi had come to know how and what can impact students in
              their lives and spirits through TKD training. Not just teaching
              physical skills, but as well as teaching life skills such as self
              discipline, self control and confidence. Master D Choi proud to
              strive in having each student to reach their full potential in
              every aspect of their life.
            </p>
          </div>
          <ul>
            <li>
              <span className='year'>2016 - 2022</span>
              <p>
                Head Master Instructor at Master Lee’s World Champion Taekwondo,
                Firethorne Location
              </p>
            </li>
            <li>
              <span className='year'>2015</span>
              <p>USA Taekwondo Certified Referee Certification</p>
            </li>
            <li>
              <span className='year'>2014</span>
              <p>
                Certifcate of Appreciation from Korea international Martial Arts
                Exchange Association
              </p>
            </li>
            <li>
              <span className='year'>2012 - 2014</span>
              <p>Taekwondo main instructor in Army</p>
            </li>
            <li>
              <span className='year'>2009 - 2012</span>
              <p>
                Assistant instructor at In-Ji taekwondo where one of the best
                Taekwondo schools in Busan, Korea
              </p>
            </li>
            <li>
              <span className='year'>2005 - 2006</span>
              <p>Busan Demonstration Team member</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}