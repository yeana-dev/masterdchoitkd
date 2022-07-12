import Navigation from './Navigation';
import Promobar from '../components/Promobar';

export default function Layout(props) {
  return (
    <>
      <Promobar />
      <Navigation />
      {props.children}
    </>
  )
}