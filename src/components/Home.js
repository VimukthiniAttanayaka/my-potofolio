import React, { useState } from "react";
import '../styles/home.css';
import '../styles/home_dark.css';
import logo from '../images/va.webp';
import { Image, Button, Offcanvas, ButtonGroup } from 'react-bootstrap';
import iconLogo from '../images/white.webp';
import iconLogo1 from '../images/black.webp';
import { GitHub, Linkedin, PhoneCall } from "react-feather";
import Contact from "./Contact";
import About from "./About";
import Work from "./Work";

function Home(props) {

    const [showAbout, setShowAbout] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleCloseAbout = () => setShowAbout(false);
    const handleShowAbout = () => setShowAbout(true);

    const handleCloseWork = () => setShowWork(false);
    const handleShowWork = () => setShowWork(true);

    const handleCloseContact = () => setShowContact(false);
    const handleShowContact = () => setShowContact(true);

    return (
        <div className={props.theme ? "home-dark" : "home"}>
            <Image src={logo} className='home-logo' alt="" />
            <div className="row home-content">
                <div className="col-2 col-sm-4 col-lg-3 px-0">
                    <Image
                        alt=""
                        src={logo}
                        className={props.theme ? 'background-logo-dark' : 'background-logo'} />
                </div>
                <div className="col-8 col-sm-8 col-lg-4 px-0">
                    <h1 className="hello">Hello,</h1>
                    <h1 className={props.theme ? "intro intro-dark" : "intro"}>
                        I'm Vimukthini, a <br />
                        full stack developer <br />
                        based in Sri Lanka</h1>
                </div>
                <div className="col-12 col-lg-5 px-0">
                    <Image
                        alt=""
                        src={props.theme ? iconLogo1 : iconLogo}
                        className={props.theme ? 'icon-logo-dark' : 'icon-logo'} />
                </div>
            </div>
            <ButtonGroup aria-label="Basic example" className="home-btn-group">
                <Button onClick={handleShowAbout} className={props.theme ?"about-btn-dark":'about-btn'}>About</Button>
                <Button onClick={handleShowWork} className={props.theme ?"about-btn-dark":'about-btn'}>Work</Button>
                <Button onClick={handleShowContact} className={props.theme ?"about-btn-dark":'about-btn'}>Contact</Button>
            </ButtonGroup>

            <Offcanvas
                show={showAbout}
                onHide={handleCloseAbout}
                placement="end"
                className={props.theme ? 'about-dark' : 'about'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                        className={props.theme ? "title-dark" : "title"}>
                        About Me
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <About theme={props.theme} />
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas
                show={showWork}
                onHide={handleCloseWork}
                placement="end"
                className={props.theme ? 'work-dark' : 'work'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                        className={props.theme ? "title-dark" : "title"}>
                        My Work
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Work theme={props.theme} />
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas
                show={showContact}
                onHide={handleCloseContact}
                placement="end"
                className={props.theme ? 'contact-dark' : 'contact'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                        className={props.theme ? "title-dark" : "title"}>
                        Contact Me
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Contact theme={props.theme} />
                </Offcanvas.Body>
            </Offcanvas>
            <ButtonGroup vertical className="home-contact-btns">
                <Button
                    href="tel:0755975740"
                    className={props.theme ? 'contact-btn-dark' : 'contact-btn'}>
                    <PhoneCall />
                </Button>
                <Button
                    href="https://www.linkedin.com/in/vimukthini-attanayaka-29284a201/"
                    target="_blank"
                    className={props.theme ? 'contact-btn-dark' : 'contact-btn'}>
                    <Linkedin />
                </Button>
                <Button
                    href="https://github.com/VimukthiniAttanayaka"
                    target="_blank"
                    className={props.theme ? 'contact-btn-dark' : 'contact-btn'}>
                    <GitHub />
                </Button>
            </ButtonGroup>
        </div>
    );
}
export default Home;