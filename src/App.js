import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blogs/Blog';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="md:w-[90%] mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/cart' element={<MyCart></MyCart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
