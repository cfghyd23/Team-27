import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
// import Home from './components/Home';
import HomePage from './components/HomePage/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import SkillDevelopment from './components/SkillDevelopment';
import SeekHelpAllForms from './components/SeekHelpAllForms/SeekHelpAllForms';
import User from './components/User';
import QuizHome from './components/QuizHome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/skilldevelopment" element={<SkillDevelopment/>}></Route>
        <Route path="/seek-help-all-forms" element={<SeekHelpAllForms />}></Route>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/skilldevelopment" element = {<SkillDevelopment/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/signup" element = {<SignUp/>}></Route>
        <Route path = "/faq" element = {<faq/>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route>
        <Route path = "/faq" element = {<NotFound/>}></Route>
        <Route path = "/user" element = {<User/>}></Route>
        <Route path = "/QuizHome" element = {<QuizHome/>}></Route>
        <Route path = "/Quiz" element = {<Quiz/>}></Route>
        <Route path = "/result" element = {<Result/>}></Route>
        <Route path = "/profile" element = {<Profile/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
