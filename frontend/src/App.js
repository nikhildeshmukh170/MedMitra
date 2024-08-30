import logo from './logo.svg';
import './App.css';
import Navbar from "./patient/components/Navbar/Navbar"
import Maincarosel from './patient/components/HomeCarousel/MainCarousel';

function App() {
  return (
    <div className='App'>
      <div className='Navbar mb-2'>
        <Navbar />
      </div>
      <div className='maincontent'>
        <Maincarosel />
      </div>
    </div>
  )
}

export default App;
