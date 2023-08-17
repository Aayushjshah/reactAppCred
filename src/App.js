import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';
import Customers from './Components/Customer';
import Login from './Components/Login';
import Register from './Components/Register';
import Cancel from './Components/Cancel';
import Home from './Components/Home'
import Analytics from './Components/Analytics'
import About from './Components/About';
import CancelCustomer from './Components/CancelCustomer'
function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='container'>
        <Routes>
          {<Route path='/' element={<Home />} />}
          {<Route path='/customers' element={<Customers />} />}
          {<Route path='/analytics' element={<Analytics />} />}
          {<Route path='/register' element={<Register />} />}
          {<Route path='/cancel' element={<Cancel />} />}
          {<Route path='/cancel/:id' element={<CancelCustomer />} />}
          {<Route path='/login' element={<Login />} />}
          {<Route path='/about' element={<About />} />}

        </Routes>
      </div>

    </div>


  );
}

export default App;
