
import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

import Blog from './Pages/Blogs/Blog';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';


import Dashboard from './Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders';
import MyAddress from './Dashboard/MyAddress';
import TrackYourOrder from './Dashboard/TrackYourOrder';
import AccountDetails from './Dashboard/AccountDetails';

import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <div className="md:w-[90%] mx-auto">
      <Navbar />
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />}></Route>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/cart' element={<MyCart></MyCart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>




        {/*single User Dashboard */}
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index path='' element={<MyOrders />}></Route>
          <Route path='myaddress' element={<MyAddress />}></Route>
          <Route path='trackorder' element={<TrackYourOrder />}></Route>
          <Route path='accountdetails' element={<AccountDetails />}></Route>


        </Route>




        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
