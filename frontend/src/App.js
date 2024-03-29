import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import ProvideHelp from './components/ProvideHelp/ProvideHelp';
import FAQ from './components/faq';
import SeekHelpAllForms from './components/SeekHelpAllForms/SeekHelpAllForms';
import SkillDevelopment from './components/SkillDevelopment';
import User from './components/User';
import QuizHome from './components/QuizHome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Profile from './components/Profile';
import ContextAPI from './components/ContextAPI';
import { useState } from 'react';
import { MyContext } from "./components/ContextAPI.js";


function App() {

  const [text, setText] = useState(true);
  return (
    <MyContext.Provider value={{ text, setText }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/provide-help" element={<ProvideHelp />}></Route >
        <Route path="/notifications" element={<SeekHelpAllForms />}></Route>
        <Route path="/skill-development" element={<SkillDevelopment />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/need-help" element={<User />}></Route>
        <Route path="/quizHome" element={<QuizHome />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
