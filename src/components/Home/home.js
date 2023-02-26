import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'
import { scroller } from "react-scroll";
import {useNavigate} from "react-router-dom";
import { events } from '../../Events/events';
import './home.css'


export default function Home() {
  const ev = Array.from(Object.entries(events))

  
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
      <div class="head" id="head">
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

          <div class="event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3" id={data[0]}>
                <Tilt style={{ backgroundColor: "transparent" }}>
                  <img src={data[1].image} onClick={()=>event(data[0])} style={{cursor: "pointer","border-radius":"15px"}}/>
                </Tilt>
          </div>
          
        );})}
      </div>
    </main>
    </>
  )
}