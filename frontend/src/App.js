import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import FAQ from './components/faq';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/signup" element = {<SignUp/>}></Route>
        <Route path = "/faq" element = {<FAQ/>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
