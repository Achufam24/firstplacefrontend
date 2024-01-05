import Home from "./Home";
import './index.css';
import Navbar from './Nav'
import React from 'react';
import Footbar from './footbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from "./login";
import Sign from './sign'



function App() {

 
  return (
    <BrowserRouter>
    <div className="home">

      <Navbar/>
     <div >
     <Routes>
      
      <Route exact path="/" element = {<Home/>}/>
      <Route path="/login" element = {<Form/>}/>
      <Route path="/signup" element = {<Sign/>}/>

      
    </Routes>
      </div> 
      <div>
        <Footbar/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
