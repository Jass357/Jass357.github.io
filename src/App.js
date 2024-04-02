import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Projects from "./components/Projects";
import Apps from "./components/Apps";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
   
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/apps' element={<Apps/>}/>
         <Route path='/' element={<About/>}/>
         <Route path='/skills' element={<Skills/>}/>
       </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
