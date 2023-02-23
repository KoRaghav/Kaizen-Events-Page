import React, {useState} from "react";
import "./Form.css";
import {collection, setDoc, doc} from 'firebase/firestore'
import db from '../Firebase/firebaseConfig'


// import Header from "./navbar.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import logo from "./kaizen logo.png";


export default class KaizenForm extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Number: '',
            College: ''
            
        };

        this.submit = async () => {  
            await setDoc(doc(db.db, 'Registrations',`${this.Email}`), {
                Name: this.Name,
                Email: this.Email,
                Number: this.Number,
                College: this.College
                });                     
            this.Name= '';
            this.Email= '';
            this.Number= '';
            this.College= ''; 
            this.home();
        }
        this.handleInputChange = (e) => {
            const {id , value} = e.target;
            if(id === "Name"){this.Name = value;}
            if(id === "Mobile"){this.Number =value;}
            if(id === "Email"){this.Email = value;}
            if(id === "College"){this.College = value;}
        }


    }


      
    render() {
        return (
            <>
                <section className="wrapper" id="formSec">
                    <div className="formDiv">
                        <h2 className="subtitle" data-aos="fade-up">
                            Registration Form
                        </h2>
                        <br/>
                        <div className="content" id="bod">
                            <form
                                className="gform"
                                id="my-form"
                                onSubmit={(e) => {e.preventDefault(); this.submit();}}
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
                                            onChange = {(e) => this.handleInputChange(e)}
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
                                            onChange= {(e) => this.handleInputChange(e)}
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
                                            onChange={(e) => this.handleInputChange(e)}
                                        />
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div class="container">
                                        <label htmlFor="College" data-aos="fade-up">
                                            College Name*:
                                        </label>
                                        <br />
                                        <input type="text" name="college name" id="College" required onChange={(e) => this.handleInputChange(e)} />
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
}
