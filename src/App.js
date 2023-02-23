import Tilt from 'react-parallax-tilt';
import Registration from './components/Registeration/Registration';
import EventDescription from './components/EventDescription/EventDescription'

function App() {
  return (
    <div>
        <div className='reg'>
          <Registration/>
        </div>
        

        <div className='reg'>
          <Tilt className="each-event" style={{ backgroundColor: "transparent"}}>
            <EventDescription/>
          </Tilt>   
        </div>
    </div>
  );
}

export default App;
