import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './screens/Home';
import About from './screens/About';
import Programs from './screens/Programs';
import Schedule from './screens/Schedule';
import ContactUs from './screens/ContactUs';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
