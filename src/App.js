import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from './components/EventDescription/EventDescription'

import preloader from './assets/images/preloader.gif';
import { scroller } from "react-scroll";
import Navbar from './components/Navbar/navbar';

import './App.css'

import KaizenForm from './components/Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate,useParams  } from "react-router-dom";
import { events } from './Events/events';
import RegisterButton from './components/RegisterButton/registerButton'
import Home from './components/Home/home'
import EventPage from './components/EventPage/eventPage'

function App() {


  return (
    <div>
      <Navbar/>

    
      <div class="preloader"> <img src={preloader} alt="Image"/>
        <ul class="text-rotater">
          <li>Hangin there</li>
          <li>Still loading</li>
          <li>Almost done</li>
        </ul>
      </div>


        
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form/:id" element={<KaizenForm />} />
          <Route path=":id" element={<EventPage/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
