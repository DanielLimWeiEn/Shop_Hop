import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";

const App = () => {
  return <>
  <Navbar/>
  <Register/>
  <Footer/> 
  </>


};
 
export default App;