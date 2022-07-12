import React from "react";
import '../styles/contact.css';
import '../styles/contact_dark.css';
import { Form, Button } from 'react-bootstrap';
import { Mail, PhoneCall, Image } from "react-feather";
import fb from '../images/fb1.webp';
import whatsapp from '../images/whatsapp1.webp';
import linkdin from '../images/linkdin1.webp';

function Contact(props) {

    return (
        <div>
            <div className="row">
                <h4 className={props.theme?"contact-text-dark mb-3":"contact-text mb-3"}>Get in touch. Let's work together</h4>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Form>
                        <Form.Group className="mail-text mb-2">
                            <Form.Label className={props.theme?"white-text":""}>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mail-text mb-2 mt-4">
                            <Form.Label className={props.theme?"white-text":""}>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mail-text mb-2 mt-4">
                            <Form.Label className={props.theme?"white-text":""}>Your Message</Form.Label>
                            <Form.Control as="textarea" divs={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="send-mail-btn">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-12 col-lg-6 contact-details">
                    <div className="row phone mt-5" href="tel:0755975740">
                        <div className="col-1" xs={1}>
                            <PhoneCall className={props.theme?"white-text":""}/>
                        </div>
                        <div className="col-11 ps-3" xs={10}>
                            <p className={props.theme?"white-text":""}>0755975740</p>
                        </div>
                    </div>
                    <div className="row email">
                        <div className="col-1" xs={1}>
                            <Mail className={props.theme?"white-text":""}/>
                        </div>
                        <div className="col-11 ps-3" xs={10}>
                            <p className={props.theme?"white-text":""}>vimukthinia@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h5 className={props.theme?"white-text ms-5":"ms-5"}>Follow me on :-</h5>
                        <div xs={12} className="ms-5 ps-5 social">
                            <img src={linkdin} alt=""/>
                            <img src={whatsapp} alt=""/>
                            <img src={fb} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;