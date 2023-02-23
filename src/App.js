import Tilt from 'react-parallax-tilt';
import Registration from './components/Registeration/Registration';
import EventDescription from './components/EventDescription/EventDescription'
import KaizenForm from './components/Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><div className='reg'>
            <Registration />
          </div>


            <div className='reg'>
              <Tilt className="each-event" style={{ backgroundColor: "transparent" }}>
                <EventDescription />
              </Tilt>
            </div></>} />
          <Route path="/form" element={<KaizenForm />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
