import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className=" xl:max-w-7xl md-w-full  mx-auto    md:px-3">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
