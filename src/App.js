import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation'
import Maincontent from './component/Maintcontent'
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
