import React from "react";
import "./Form.css";
// import Header from "./navbar.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./kaizen logo.png";


export default class KaizenForm extends React.Component {
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
                                method="POST"
                                data-email="anishbanerjee2002@gmail.com"
                                id="my-form"
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
                                        />
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div class="container">
                                        <label htmlFor="College" data-aos="fade-up">
                                            College Name*:
                                        </label>
                                        <br />
                                        <input type="text" name="college name" required />
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
