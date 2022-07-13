import React from "react";
import '../styles/work.css';
import Carousel from 'react-bootstrap/Carousel';
import library from '../images/library.webp';
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
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h4 className={props.theme?'work-title-dark':'work-title'}>Html 👇🏻</h4>
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
                                className="d-block w-100"
                                src={library}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                                className="d-block w-100"
                                src={library}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                                className="d-block w-100"
                                src={library}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Work;