import { useState } from 'react'
import './App.css'
import Header from './components/shared/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Home from './pages/Home.jsx';
import Achievements from './pages/Achievements.jsx';
import Contact from './pages/Contact.jsx';
import SocialMediaSidebar from "./components/shared/socialmediasidebar.jsx";
import Footer from "./components/shared/Footer.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <SocialMediaSidebar />
      <div className=" bg-black min-h-screen pt-18 px-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App