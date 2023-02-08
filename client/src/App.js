import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar} from './Navbar';
import {  BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import {Form} from './Form';
// import Navb from './Navb';
import Gatepass from './Gatepass';
import Permit from './Permit';
import Gaurd from './Gaurd';
import Home from './Home';
import Slogin from './Slogin';
import Glogin from './Glogin';
import Hlogin from './Hlogin';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Slogin" element={<Slogin/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Glogin" element={<Glogin/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Hlogin" element={<Hlogin/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Form" element={<Form/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Permit" element={<Permit/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Gaurd" element={<Gaurd/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Gatepass" element={<Gatepass/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
