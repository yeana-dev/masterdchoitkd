import './styles/Promobar.scss';

export default function Promobar() {
  return (
    <div className='promobar'>
      <p className='promobar__text'>
        GRAND OPENING 🎉{' '}
        <a
          href='https://goo.gl/maps/UXEWZ2Ryi2AHWXwx9'
          target='_blank'
          rel='noreferrer'
        >
          18310 W Airport Blvd Suite 700, Richmond, TX 77407
        </a>{' '}
        📞 <a href='tel:832-282-8633'>CLICK HERE TO CALL TODAY!</a>
      </p>
    </div>
  );
}