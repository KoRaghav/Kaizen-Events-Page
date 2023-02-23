import React from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from './components/EventDescription/EventDescription'
import Registration from './components/Registeration/Registration'
import preloader from './assets/images/preloader.gif';

import './App.css'

function App() {
  return (
    <div>

      <div class="preloader"> <img src={preloader} alt="Image"/>
        <ul class="text-rotater">
          <li>Hangin there</li>
          <li>Still loading</li>
          <li>Almost done</li>
        </ul>
      </div>

        <div className='reg'>
          <Registration/>
        </div>
        

        <div className='reg'>
          <Tilt className="each-event" style={{ backgroundColor: "transparent"}}>
            <EventDescription/>
          </Tilt>   
        </div>
    </div>
  );
}

export default App;
