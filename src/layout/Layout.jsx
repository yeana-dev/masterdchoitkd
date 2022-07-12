import Navigation from './Navigation';
import Promobar from '../components/Promobar';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <Promobar />
      <Navigation />
      {props.children}
      <Footer />
    </>
  )
}