import React from 'react';
import Tilt from 'react-tilt'

import EventDescription from '../components/EventDescription'
import Banner from '../components/Banner'
import Prizes from '../components/Prizes'
import Timeline from '../components/Timeline'
import Registration from '../components/Registration'

function Event() {
   
  return (
    <div>
        {/* TODO : POSTER */}
        <Banner/>

        {/* Banner 2 */}
        {/* <Banner title='title' description='description'/> */}

        {/*  PRIZES */}
        <Prizes/>

        {/* TIMELINES */}
        <Timeline/>

        {/* REGISTRATION LINK */}
        <div className='reg'>
          <Registration/>
        </div>
        

        {/* EVENT DESCRIPTION */}
        <div className='reg'>
          <Tilt className="each-event" style={{ backgroundColor: "transparent"}}>
            <EventDescription/>
          </Tilt>   
        </div>
       
    </div>
  )
}

export default Event