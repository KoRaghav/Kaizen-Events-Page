import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from './components/EventDescription/EventDescription'

import Registration from './components/Registeration/Registration'
import preloader from './assets/images/preloader.gif';


import './App.css'

import KaizenForm from './components/Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate,useParams  } from "react-router-dom";
import Alert from './components/Alert/alert';
import { events } from './components/events';

function Home() {
  const {state} = useLocation();

  var alert=false;
  if (state) {alert = state.alert;}
  else {alert = false;}
  
  let navigate = useNavigate(); 
  const event = ({title}) =>{ 
    let path = `/`; 
    navigate(path,{ state: { title:title} });
  }

  return (
    <>
    {alert ? <Alert/> : <></>}
      <div class="head pt-5">
        <h2>SOCIOPRENEURS</h2>
        <h3>A platform to motivate aspiring social entrepreneurs to develop their ideas and inspire them for social change</h3>

      </div>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    <main style={{"position":"relative","top":"15vh"}}>


      <div className='reg'>
        <Tilt className="each-event" style={{ backgroundColor: "transparent" }}>
          <EventDescription />
        </Tilt>
      </div>
      <div style={{minHeight:"100vh"}}></div>
    </main>
    </>
  )
}

function Event() {
  const { id } = useParams();

  const title = events[0][`${id}`]["title"];
  const description = events[0][`${id}`]["description"];
  const image = events[0][`${id}`]["image"];
  console.log(image);
  return (
    <>
      <div class="head pt-5">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    <main style={{"position":"relative","top":"15vh"}}>
      {/* <div className='reg p-3'>
        <Registration />
      </div> */}

      <img src={image}/>

      <div className='reg'>
        <Tilt className="each-event" style={{ backgroundColor: "transparent" }}>
          <EventDescription />
        </Tilt>
      </div>
      <div style={{minHeight:"100vh"}}></div>
    </main>
    </>
  )
}


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


        
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<KaizenForm />} />
          <Route path=":id" element={<Event/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
