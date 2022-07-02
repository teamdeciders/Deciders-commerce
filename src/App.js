import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import MyCart from './Pages/MyCart/MyCart';

function App() {
  return (
    <div className=" xxl:max-w-7xl md-w-full  mx-auto    md:px-3">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<MyCart></MyCart>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
