import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'


import { scroller } from "react-scroll";
import Navbar from '../Navbar/navbar';

import './home.css'

import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate,useParams  } from "react-router-dom";
import Alert from '../Alert/alert';
import { events } from '../../Events/events';


export default function Home() {
  const {state} = useLocation();
  const ev = Array.from(Object.entries(events))
  var alert=false;
  if (state) {alert = state.alert;}
  else {alert = false;}
  
  let navigate = useNavigate(); 
  const event = async (id) =>{ 
    let path = `/${id}`; 
    await navigate(path);
    await scroller.scrollTo('head', {
      duration: 1500,
      offset: 0,
    });
  }

  return (
    <>
      <div class="head">
        {alert ? <Alert/> : <></>}
        <h2 class="pt-2 Title">EVENTS</h2>

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
      
      <div className="events-container row p-5 justify-content-center">
        {ev.map((data, key) => {return(

          <div class="event col-xl-4 col-lg-4 col-md-4 col-sm-6 col-10 p-4" id={data[0]}>
                <Tilt style={{ backgroundColor: "transparent" }}>
                  <a onClick={()=>event(data[0])} style={{cursor: "pointer"}}><img src={data[1].image}/></a>
                </Tilt>
          </div>
          
        );})}
      </div>
    </main>
    </>
  )
}