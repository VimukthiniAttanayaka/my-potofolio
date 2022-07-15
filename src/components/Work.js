import React from "react";
import '../styles/work.css';
import Carousel from 'react-bootstrap/Carousel';
import library from '../images/library.webp';
import mark from '../images/markapp.webp';
import lms from '../images/lms.webp';
import cal from '../images/cal.webp';
import form from '../images/form.webp';
import map from '../images/map.webp';
import swing from '../images/swing.webp';
import react from '../images/react.webp';
import redux from '../images/redux.webp';
import boot from '../images/boot.webp';
import css from '../images/css.webp';
import scss from '../images/scss.webp';
import flutter from '../images/flutter.webp';
import html from '../images/html.webp';
import js from '../images/js.webp';
import php from '../images/php.webp';
import types from '../images/type.webp';
import java from '../images/java.webp';

function Work(props) {
    return (
        <div>
            <h4 className={props.theme?'work-title-dark':'work-title'}>React 👇🏻 (774px w)</h4>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block w-100 demo-img"
                                src={library}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>React Library app</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={react} />
                                    <img src={redux} />
                                    <img src={scss} />
                                    <img src={boot} />
                                    <img src={types} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block w-100 demo-img"
                                src={mark}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>React Mark app</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={react} />
                                    <img src={scss} />
                                    <img src={boot} />
                                    <img src={types} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block w-100 demo-img"
                                src={lms}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>Learning Management System</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={react} />
                                    <img src={scss} />
                                    <img src={boot} />
                                    <img src={types} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <h4 className={props.theme?'work-title-dark':'work-title'}>Html 👇🏻</h4>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block w-100 demo-img"
                                src={cal}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>Calculater</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={html} />
                                    <img src={css} />
                                    <img src={js} />
                                    <img src={boot} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <h4 className={props.theme?'work-title-dark':'work-title'}>Java 👇🏻</h4>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block w-100 demo-img"
                                src={swing}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>Java Swing Shopping App</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={java} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <h4 className={props.theme?'work-title-dark':'work-title'}>Flutter 👇🏻</h4>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block demo-img flutter"
                                src={form}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>Flutter Form</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={flutter} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                        <div className='col-12 col-md-6 demo-item'>
                            <img
                                className="d-block demo-img flutter"
                                src={map}
                                alt="First slide"
                            />
                            <Carousel.Caption className='demo-deta'>
                                <h3>Flutter Map</h3>
                                <p className='demo-icon mb-4'>
                                    <img src={flutter} />
                                </p>
                                <a className="demo">Demo ➔</a>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Work;