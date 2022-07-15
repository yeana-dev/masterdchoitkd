import Navigation from './Navigation';
import Promobar from '../components/Promobar';
import Footer from './Footer';
import Banner from '../components/Banner';

export default function Layout(props) {
  return (
    <>
      <Promobar />
      <Navigation />
      {props.children}
      <Banner />
      <Footer />
    </>
  )
}