import React from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from './components/EventDescription/EventDescription'

import Registration from './components/Registeration/Registration'
import preloader from './assets/images/preloader.gif';

import './App.css'

import KaizenForm from './components/Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>


      {/* <div class="preloader"> <img src={preloader} alt="Image"/>
        <ul class="text-rotater">
          <li>Hangin there</li>
          <li>Still loading</li>
          <li>Almost done</li>
        </ul>
      </div> */}


        

      <Router>
        <Routes>
          <Route path="/" element={
          <>
          <div className='reg'>
            <Registration />
          </div>


            <div className='reg'>
              <Tilt className="each-event" style={{ backgroundColor: "transparent" }}>
                <EventDescription />
              </Tilt>
            </div></>} />
          <Route path="/form" element={<KaizenForm />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
