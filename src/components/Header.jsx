import './styles/Header.scss';

export default function Header(props) {
  return (
    <div className='page-header'>
      <header>
        <div className='heading-container'>
          <h1>{props.text}</h1>
        </div>
      </header>
    </div>
  );
}