/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import React from 'react';

import { Routes,Route,BrowserRouter  } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import RegisterPage2 from './pages/Register/RegisterPage2';
import RegisterPage3 from './pages/Register/RegisterPage3';
import InforVehical from './pages/Register/InforVehical';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Terms from './pages/Terms/Terms';
import About from './pages/About/About';
import Privacy from './pages/Privacy/Privacy';

function App() {
  return (
    <div className="">

      <div className="bg-img container-fluid vh-100">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/register2' element={<RegisterPage2 />}></Route>
          <Route path='/register3' element={<RegisterPage3 />}></Route>
          <Route path='/inforvehical' element={<InforVehical />}></Route>
          /** Contacts */
          <Route path='/contacts' element={ <Contacts/>}></Route>
          /** Terms*/
          <Route path='/terms' element={ <Terms/>}></Route>
          <Route path='/about' element={ <About/>}></Route>
          <Route path='/policy-privacy' element={ <Privacy/>}></Route>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
