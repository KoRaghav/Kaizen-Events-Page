import React from 'react';
import preloader from './assets/images/preloader.gif';
import Navbar from './components/Navbar/navbar';
import KaizenForm from './components/Form/KaizenForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/home'
import EventPage from './components/EventPage/eventPage'
import RegisterSuccess from './components/Form/RegisterSuccess';
import './App.css'

function App() {


  return (
    <div>
      <Navbar/>
    
      <div class="preloader"> <img src={preloader} alt="Image"/>
        <ul class="text-rotater">
          <li>Hangin there</li>
          <li>Still loading</li>
          <li>Almost done</li>
        </ul>
      </div>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/registersuccess" element={<RegisterSuccess/>} />
          <Route path="/form/:id" element={<KaizenForm />} />
          <Route path=":id" element={<EventPage/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
