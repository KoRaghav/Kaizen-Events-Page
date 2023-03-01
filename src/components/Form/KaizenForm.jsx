import React, {useState} from "react";
import "./Form.css";
import {collection, setDoc, doc} from 'firebase/firestore'
import db from '../Firebase/firebaseConfig'
import { useNavigate, useParams } from "react-router-dom";
import {events} from '../../Events/events'
import { scroller,animateScroll } from "react-scroll";

// import Header from "./navbar.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import logo from "./kaizen logo.png";
import Background from "../background/background";

export default function KaizenForm () {

    const { id } = useParams(); 
    console.log(id)

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [College, setCollege] = useState('')    
    
    let navigate = useNavigate(); 
    const home = () =>{ 
      let path = `/registersuccess`; 
      navigate(path,{ state: { alert:true } }); 
    }

    const submit = async () => {  
        await setDoc(doc(db.db, id,`${Email}`), {
            'Name': Name,
            'Email': Email,
            'Number': Number,
            'College': College
            });                     
        setName('');
        setEmail('');
        setNumber('');
        setCollege(''); 
        home();
    }
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){setName(value);}
        if(id === "Mobile"){setNumber(value);}
        if(id === "Email"){setEmail(value);}
        if(id === "College"){setCollege(value);}
    }

    return (
        <>
        <Background/>
            <section className="wrapper text-center" id="formSec">
                <div className="formDiv">
                    <h2 className="subtitle" data-aos="fade-up">
                        Register For {events[`${id}`]['title']}
                    </h2>
                    <br/>
                    <div className="content" id="bod">
                        <form
                            className="gform"
                            id="my-form"
                            onSubmit={(e) => {e.preventDefault();submit()}}
                            >
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="Name" data-aos="fade-up">
                                        Your Name*:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="Name"
                                        name="Name"
                                        data-aos="fade-up"
                                        required
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="Mobile" data-aos="fade-up">
                                        Contact Number(WhatsApp)*:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="Mobile"
                                        name="Mobile"
                                        data-aos="fade-up"
                                        pattern="[\s]{0,}[+0-9]{10,}[\s]{0,}"
                                        required
                                        onChange= {(e) => handleInputChange(e)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="email" data-aos="fade-up">
                                        E-mail ID*:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="Email"
                                        name="Email"
                                        pattern="[\s]{0,}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}[\s]{0,}$"
                                        data-aos="fade-up"
                                        required
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="College" data-aos="fade-up">
                                        College Name*:
                                    </label>
                                    <br />
                                    <input type="text" name="college name" id="College" required onChange={(e) => handleInputChange(e)} />
                                </div>
                            </fieldset>
                            <fieldset style={{ placeItems: "center" }}>
                                <input
                                    className="formSub"
                                    type="Submit"
                                    defaultValue="Register"
                                    id="sub"
                                />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )

}
