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
          /** contacts */
          <Route path='/contacts' element={ <Contacts/>}></Route>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
