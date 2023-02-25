import React, {useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from '../EventDescription/EventDescription'

import Registration from '../Registration/Registration'
import { scroller } from "react-scroll";

import './eventPage.css'

import KaizenForm from '../Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate,useParams  } from "react-router-dom";
import { events } from '../../Events/events';
import RegisterButton from '../RegisterButton/registerButton'

export default function Event() {
  const { id } = useParams();

  const ev = events[`${id}`]
  const title = ev["title"];
  const image = ev["image"];
  const description = ev["description"];

  return (
    <>
      <div class="head" id="head">
        <h2 class="Title">{title}</h2>
        <h3 class="px-5" style={{"color":"#bbbbbb","font-weight":"900"}}>{description}</h3>
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
        <div class="col-xl-5 col-lg-5 col-md-7 col-sm-8 col-12">
          <img src={image} class="px-5 py-3"/>
        </div>
        <div className='reg col-xl-7 col-lg-7 col-md-5 col-sm-12 col-12 pt-3 flex-column'>
          <div class="py-5"><RegisterButton id={id}/></div>
          <Tilt className="each-event pt-5" style={{ backgroundColor: "transparent" }}>
            <EventDescription />
          </Tilt>
        </div>
      </div>
    </main>
    </>
  )
}
