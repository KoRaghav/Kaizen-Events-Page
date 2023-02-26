import React from 'react';

import './eventDescription.css';

function EventDescription({title,content}) {
  return ( 
      <div class="Hov">
        <div class="card">
            <div class="title">
              {title}
            </div>
            <div class="content">

              <p>{content}</p>
            </div>
        </div>
            <div class="Dummy"></div>
      </div>
    
  )
}

export default EventDescription