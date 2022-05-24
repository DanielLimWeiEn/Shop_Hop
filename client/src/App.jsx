import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";

const App = () => {
  return <BrowserRouter>
  <Announcement/>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/user/signin" element={<Login/>} />
    <Route path="/user/signup" element={<Register/>} />
  </Routes>
   
  <Footer/> 
  </BrowserRouter>;
};
 
export default App;