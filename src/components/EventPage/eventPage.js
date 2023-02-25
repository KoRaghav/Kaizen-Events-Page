import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt'

import EventDescription from '../EventDescription/EventDescription'

import Registration from '../Registration/Registration'
import { scroller } from "react-scroll";

import './eventPage.css'

import KaizenForm from '../Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import { events } from '../../Events/events';
import RegisterButton from '../RegisterButton/registerButton'

export default function Event() {
  const { id } = useParams();

  const ev = events[`${id}`]
  const date = ev["date"];
  const title = ev["title"];
  const image = ev["image"];
  const content = ev["content"];
  const description = ev["description"];

  return (
    <>
      <div class="head" id="head">
        <h2 class="Title">{title}</h2>
        <h3 class="px-5" style={{ "color": "#bbbbbb", "font-weight": "900" }}>{description}</h3>
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
      <main style={{ "position": "relative" }}>

        <div class="row justify-content-center p-3">
          <div class="col-xl-5 col-lg-5 col-md-7 col-sm-8 col-12">
            <div class="image">
              <div class="up"></div>
              <div class="border">
                <img src={image} class="p3" />
              </div>
              <div class="down"></div>
            </div>
          </div>
          <div className='reg col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12 flex-column'>
            <div class="pb-5 pt-3"><RegisterButton id={id} /></div>
            <h3 class="py-5 px-3 text-center" style={{ "color": "white" }}>{date}</h3>
            <Tilt className="each-event pt-5" style={{ backgroundColor: "transparent" }}>
              <EventDescription title={title} content={content} />
            </Tilt>
          </div>
        </div>
      </main>
    </>
  )
}
