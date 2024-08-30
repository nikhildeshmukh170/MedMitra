import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './patient/pages/Home/Home';
import LoginPage from './patient/components/Login/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
