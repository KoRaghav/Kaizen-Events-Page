import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from './components/EventDescription/EventDescription'

import Registration from './components/Registration/Registration'
import preloader from './assets/images/preloader.gif';


import './App.css'

import KaizenForm from './components/Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate,useParams  } from "react-router-dom";
import Alert from './components/Alert/alert';
import { events } from './Events/events';

function Home() {
  const {state} = useLocation();
  const ev = Array.from(Object.entries(events))
  var alert=false;
  if (state) {alert = state.alert;}
  else {alert = false;}
  
  let navigate = useNavigate(); 
  const event = (id) =>{ 
    let path = `/${id}`; 
    navigate(path);
  }

  return (
    <>
      <div class="head">
        {alert ? <Alert/> : <></>}
        <h2 class="pt-2">EVENTS</h2>

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
    <main style={{"position":"relative"}}>
      
      <div className="events-container row p-5">
        {ev.map((data, key) => {console.log(data[0]);return(

          <div class="event col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 p-4" id={data[0]}>
                <Tilt style={{ backgroundColor: "transparent" }}>
                  <a onClick={()=>event(data[0])}><img src={data[1].image}/></a>
                </Tilt>
          </div>
          
        );})}
      </div>
    </main>
    </>
  )
}

function Event() {
  const { id } = useParams();

  const ev = events[`${id}`]
  const title = ev["title"];
  const image = ev["image"];
  const description = ev["description"];

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
    <main style={{"position":"relative"}}>

      <div class="row justify-content-center p-3">
        <div class="col-xl-5 col-lg-5 col-md-7 col-sm-8 col-12 pb-2">
          <img src={image} class="p-5"/>
        </div>
        <div className='reg col-xl-7 col-lg-7 col-md-5 col-sm-12 col-12 pt-4'>
          <Tilt className="each-event" style={{ backgroundColor: "transparent" }}>
            <EventDescription />
          </Tilt>
        </div>
      </div>
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
