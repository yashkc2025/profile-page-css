import logo from './logo.svg';
import './App.css';
import Primage from './components/Pic';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Hero from './components/Hero';
function App() {
  return (
    <div className="main">
      <div className='profile'>
        <Primage/>
        <Intro/>
        <Hero/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
