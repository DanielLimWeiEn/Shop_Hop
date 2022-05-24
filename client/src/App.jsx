import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Announcement from "./components/Announcement";

const App = () => {
  return <>
  <Announcement/>
  <Navbar/>
  <Home/>
  <Footer/>
  </>


};
 
export default App;