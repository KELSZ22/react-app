import React from 'react';
import Navbar from  './Template/Navigation.jsx'
import Home_Header from './Template/_header.jsx'
import Footer from './Template/Footer.jsx'
import About from './Contents/About.jsx'
import Home from './Contents/Home.jsx'
import Projects from './Contents/Projects.jsx'
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';


    
 
    
function App (){



  return (
<>


  <Router>
    <Navbar/>
    <HeaderWrapper />

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/aboutme" exact element={<About />} />
      <Route path="/resume" exact element={<About />} />
      <Route path="/project" exact element={<Projects />} />
      <Route path="/contact" exact element={<About />} />
    </Routes>
  </Router>

  
  <Footer/>

</>
);

}

const HeaderWrapper = () => {

  const location = useLocation();

  if (location.pathname === "/") {
    return <Home_Header />; 
  }

  return null; 
};


export default App