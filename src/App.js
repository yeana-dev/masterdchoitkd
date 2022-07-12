import './App.css';

import Layout from './layout/Layout';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
