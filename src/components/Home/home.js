import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'
import { scroller } from "react-scroll";
import {useNavigate} from "react-router-dom";
import { events } from '../../Events/events';
import './home.css'




export default function Home() {

  function pane(lst){
    return (
      <div className="events-container row p-5 justify-content-center">
        {lst.map((data, key) => {data = ev[data];return(

          <div class="event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3" id={data[0]}>
                <Tilt style={{ backgroundColor: "transparent" }}>
                  <img src={data[1].image} onClick={()=>event(data[0])} style={{cursor: "pointer","border-radius":"15px","max-width":"100%"}}/>
                </Tilt>
          </div>
          
        );})}
      </div>
    )
  }


  const evt = Array.from(Object.entries(events))
  const ev = evt.sort(function(a, b) {return a[1].rank - b[1].rank;});
  const competitions=[],workshops=[],lectures=[];
  for (let i=0;i<ev.length;i++){ 
    if (ev[i][1].category==="competition"){competitions.push(i)};
    if (ev[i][1].category==="workshop"){workshops.push(i)};
    if (ev[i][1].category==="lecture"){lectures.push(i)};
  }
  
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
      
      <ul class="nav nav-pills mb-3 p-3 justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item p-2" role="presentation">
          <button class="nav-link active p-3" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">ALL</button>
        </li>
        <li class="nav-item p-2" role="presentation">
          <button class="nav-link p-3" id="pills-competitions-tab" data-bs-toggle="pill" data-bs-target="#pills-competitions" type="button" role="tab" aria-controls="pills-competitions" aria-selected="true">COMPETITIONS</button>
        </li>
        <li class="nav-item p-2" role="presentation">
          <button class="nav-link p-3" id="pills-workshops-tab" data-bs-toggle="pill" data-bs-target="#pills-workshops" type="button" role="tab" aria-controls="pills-workshops" aria-selected="false">WORKSHOPS</button>
        </li>
        <li class="nav-item p-2" role="presentation">
          <button class="nav-link p-3" id="pills-lectures-tab" data-bs-toggle="pill" data-bs-target="#pills-lectures" type="button" role="tab" aria-controls="pills-lectures" aria-selected="false">GUEST LECTURES</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
          <div className="events-container row p-5 justify-content-center">
            {ev.map((data, key) => {return(

              <div class="event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3" id={data[0]}>
                    <Tilt style={{ backgroundColor: "transparent" }}>
                      <img src={data[1].image} onClick={()=>event(data[0])} style={{cursor: "pointer","border-radius":"15px","max-width":"100%"}}/>
                    </Tilt>
              </div>
              
            );})}
          </div>
        </div>

        <div class="tab-pane fade show" id="pills-competitions" role="tabpanel" aria-labelledby="pills-competitions-tab">
          {pane(competitions)}
        </div>
        <div class="tab-pane fade" id="pills-workshops" role="tabpanel" aria-labelledby="pills-workshops-tab">
          {pane(workshops)}          
        </div>
        <div class="tab-pane fade" id="pills-lectures" role="tabpanel" aria-labelledby="pills-lectures-tab">
          {pane(lectures)} 
        </div>
      </div>

    </main>
    </>
  )
}