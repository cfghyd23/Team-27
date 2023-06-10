import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomePage from './components/HomePage/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import FAQ from './components/faq';
import SeekHelpAllForms from './components/SeekHelpAllForms';
import SkillDevelopment from './components/SkillDevelopment';
import faq from './components/faq';
import User from './components/User';
import QuizHome from './components/Quiz/QuizHome';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Quiz/Result';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/seek-help-all-forms" element={<SeekHelpAllForms />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skilldevelopment" element={<SkillDevelopment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/faq" element={<faq />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/QuizHome" element={<QuizHome />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
