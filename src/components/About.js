import React from "react";
import '../styles/about.css';
import dp from '../images/dp1.webp';

function About(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-lg-5">
                    <img src={dp} alt="" className="dp"/>
                </div>
                <div className="col-12 col-lg-7 my-3 my-lg-0">
                    <h1 className="name animate-charcter">I'm </h1>
                    <h1 className="name animate-charcter">Vimukthini Attanayaka</h1>
                    <p className={props.theme?"mt-md-5 ms-3 my-dis-dark ":"mt-md-5 ms-3 my-dis"}> 🔹 React full stack developer based in Sri Lanka<br/>
                        🔹 Born and raised in Kandy, Sri Lanka<br/>
                        🔹 Undergraduate in university of kelaniya Bsc(hons) software engineering<br/>
                        🔹 Have a passion for developing interesting web application</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 skills mt-md-5">
                    <p className={props.theme?"white-text":""}>
                        <h3>Skills</h3>
                        🔹️ HTML/ HTML5References<br/>
                        🔹️ Cascading Style Sheets (CSS)<br/>
                        🔹️ JavaScript<br/>
                        🔹️ React JS / React TS<br/>
                        🔹️ Redux<br/>
                        🔹️ MySQL<br/>
                        🔹️ PHP<br/>
                        🔹️ Flutter<br/>
                        🔹️ Java<br/>
                    </p>
                </div>
                <div className="col-12 col-md-6 soft-skill mt-md-5">
                    <p>
                        <h4>I'm,</h4>
                        🔹 Effective communication<br/>
                        🔹 Teamwork<br/>
                        🔹 Creativity<br/>
                        🔹 Problem-solving<br/>
                        🔹 Critical thinking<br/>
                        🔹 Adaptability<br/>
                        🔹 Willingness to learn<br/>
                    </p>
                </div>
            </div>
            <div className="row mt-md-5 expreance">
                <h3 className={props.theme?"white-text":""}>Expereance</h3>
                <p className={props.theme?"white-text":""}>Full Stack Developer (Intern) Block Stars (Pvt) Ltd, Kurunagala
                    (Nov 2021 - Present)</p>
                <p className={props.theme?"white-text":""}>React Base Intrustual Training (Jan 2022 - Present)</p>
            </div>
            <div className="row m-0 imposible">
                <h1 className="d-flex justify-content-center py-5">
                    <span>I</span>M<span>POSSIBLE</span>
                </h1>
            </div>
        </div>
    );
}

export default About;