import React from 'react';
import Tilt from 'react-parallax-tilt'
import EventDescription from '../EventDescription/EventDescription'
import './eventPage.css'
import { useParams } from "react-router-dom";
import { events } from '../../Events/events';
import RegisterButton from '../RegisterButton/registerButton'
import Background from '../background/background';


export default function Event() {
  const { id } = useParams();

  const ev = events[`${id}`]
  const date = ev["date"];
  const time = ev["time"];
  const venue = ev["venue"];
  const title = ev["title"];
  const image = ev["image"];
  const content = ev["content"];
  const sections = ev["sections"];
  const description = ev["description"];

  return (
    <>
      <Background/>
      <div class="head" id="head">
        <h2 class="Title">{title}</h2>
        <h3 class="px-5" style={{ "color": "#bbbbbb", "font-weight": "900" }}>{description}</h3>
      </div>

      <main style={{ "position": "relative" }} class="pt-5">

        <div class="row justify-content-center p-3">
          <div class="col-xl-5 col-lg-5 col-md-7 col-sm-8 col-12">
            
            <div class="image mx-auto">
              <div class="up"></div>
              <div class="Border">
                <img src={image} class="p3" />
              </div>
              <div class="down"></div>
            </div>

          </div>

          <div className='reg col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12 flex-column'>
            <div class="pb-5 pt-3"><RegisterButton id={id} /></div>
            <div class="py-4 px-5">
              <h3 class="px-3" style={{ "color": "white" }}>
                <svg width="24" height="24" fill="aquamarine" class="bi bi-calendar-event" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>    
                {` ${date}`}
              </h3>
              <h3 class="px-3" style={{ "color": "white" }}>          
                <svg width="24" height="24" fill="aquamarine" class="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                {` ${time}, `}
              </h3>
              <h3 class="px-3" style={{ "color": "white" }}>          
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="aquamarine" class="bi bi-pin-map" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                </svg>
                {` ${venue}, `}
              </h3>
            </div>
            <Tilt className="each-event pt-5 mt-5" style={{ backgroundColor: "transparent" }}>
              <EventDescription title={title} content={content} />
            </Tilt>
          </div>
        </div>
      </main>

      <div className="sections-container">
        {sections.map((data, key) => {
          
          if (data.type==="TS"){
            return(
              <div class="pt-5 text-center" style={{"color":"white"}}>
                <div class="row py-4 px-3 justify-content-center text-center">
                <h2 style={{"color":'aquamarine',"position":"relative","font":"Lobster"}}>{data.title}</h2>
                    {data.data.map((card, key2) => { return (
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 p-4">
                            <Tilt className="Card p-4 mx-auto">
                                <h3 class="py-3 px-3" style={{"font-family": "Lobster, cursive","font-size":"25px"}}>{card.title}</h3>
                                <h4 class="pt-4 px-3" style={{"font-size":"20px"}}>{card.subtitle}</h4>
                            </Tilt>   
                        </div>
                    );}
                    )}  
                </div>         
              </div>          
            );
          }
          else if (data.type==="PTS"){
            return(
              <div class="pt-5 text-center" style={{"color":"white"}}>
                <div class="row py-4 justify-content-center text-center">
                <h2 style={{"color":'aquamarine',"position":"relative"}}>{data.title}</h2>
                    {data.data.map((card, key2) => { return (
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 p-4">
                            <Tilt className="Card p-4 mx-auto">
                                <img style={{"border-radius":"50%","height":"80px"}} src={card.picture} />
                                <h3 class="py-3 px-3" style={{"font-family": "Lobster, cursive","font-size":"25px"}}>{card.title}</h3>
                                <h4 class="pt-3 px-3" style={{"font-size":"20px"}}>{card.subtitle}</h4>
                            </Tilt>   
                        </div>
                    );}
                    )}  
                </div>         
              </div>          
            );
          }
          

        })}
      </div>

    </>
  )
}
