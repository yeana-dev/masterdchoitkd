import './styles/Banner.scss';

export default function Banner() {
  return (
    <div className="banner">
      <div className='banner__overlay'>
        <section className='banner__header-text'>
          <h1>Welcome to Master D. Choi Taekwondo</h1>
          {/* <h2>Placeholder text goes here</h2> */}
          <button>Click to contact us!</button>
        </section>
      </div>
    </div>
  );
}