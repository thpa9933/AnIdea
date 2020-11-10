import React, { Component, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Parallax from 'react-rellax';


function ServicesHome() {

    function scrollToResearch() {
        document.getElementById('research').scrollIntoView({behavior: "smooth"});
    }

    function scrollToSoftware() {
    document.getElementById('softwareDev').scrollIntoView({behavior: "smooth"});
    }

    function scrollToModeling() {
        document.getElementById('modeling').scrollIntoView({behavior: "smooth"});
    }

    function scrollToComputing() {
        document.getElementById('computing').scrollIntoView({behavior: "smooth"});
    }

    function scrollToGraphicDesign() {
        document.getElementById('graphicDesign').scrollIntoView({behavior: "smooth"});
    }

    return (
        <>
            <section>
                <div id="item-intro">
                        <h1>Services</h1>
                        <p>At AnIdea we offer several different services to ensure that
                            we can produce the product you are invisioning.
                        </p>
                </div>
                <div id="item-content">
                    <ul id="section-list">
                        <li onClick={scrollToResearch}> Research </li>
                        <li onClick={scrollToSoftware}> Software Development </li>
                        <li onClick={scrollToModeling}> 3D Modeling </li>
                        <li onClick={scrollToComputing}> Physical Computing </li>
                        <li onClick={scrollToGraphicDesign}> Graphic Design </li>
                    </ul>
                </div>

                <div id="services-img-home"/>

                <div id="scroll-preview">
                        <img id="down-arrow" onClick={scrollToResearch} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>
            </section>

            <section id="research">
                <div id="item-left">
                <h1>Research</h1>
                    <p>Research is seemingly simple but well overlooked.
                        It takes time, resources and sheer interest.
                    </p>
                    <p>
                        Good thing AnIdea loves research. We are more than happy to deep dive into
                        any technical topic you please.
                    </p>
                </div>
                {/* <div id="services-img-research"/> */}

                <div id="item-right">
                    <h3>What can we help you research?</h3>
                    <p>
                        Let us create whitepapers, diagrams,
                        and other meaninful displays of information so you have a solid foundation for development.
                    </p>
                </div>

                <div id="scroll-preview">
                    <img id="down-arrow" onClick={scrollToSoftware} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>
            </section>

            <section id="softwareDev">
            <div id="item-content">
            <h1>Software Development</h1>
                <hr/>
                <p> We handle web applications, personal sites,
                    portfolios, simple e-commerse, you name it.
                </p>
                <p>
                    Our lead developer (Tom) is a software engineer.
                    He enjoys UI design and writing web applications (like this one).
                    All of his professional work is proprietary and mussnt' be shared! (Don't take the ones below too seriously)
                </p>

                <h3>Single-serving-site Examples</h3>
                    <div class="weblinks">
                        <ul id="section-list">
                            <li><a href="https://creative.colorado.edu/~thpa9933/">Tom's old personal site</a></li>
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/ClockWork/index.html">Clockwork</a></li>
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/Faux/index.html">MockCompany</a></li>
                        </ul>
                        <ul id="section-list">
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/bashLove.html">BashLove</a></li>
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/gitLove.html">GitLove</a></li>
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/githubLove.html">GitHubLove</a></li>
                        </ul>
                        <ul id="section-list">
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/Animation/index.html">Michael Jackson</a></li>
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/SpriteSheets/index.html">SpriteSheets</a></li>
                            <li><a href="http://creative.colorado.edu/~thpa9933/DEV/Message/index.html">Breathe</a></li>
                        </ul>
                    </div>
                </div>

                {/* <div id="services-img-web"/> */}

                <div id="scroll-preview">
                    <img id="down-arrow" onClick={scrollToModeling} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>

            </section>

            <section id="modeling">
                <div id="item-intro">
                    <div class="image-section">
                        <h1>3D Modeling</h1>
                        <p> Modeling and rendering is an excellent way to get a better grasp on what your
                            tangeble product will look like. It helps with hone proper ergonomics, form, and functionality.
                        </p>
                    </div>
                </div>

                <div id="item-content">
                    <div class="image-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../img/Furniture1.jpg')}
                                alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-50"
                                src={require('../img/EarPiece.png')}
                                alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../img/bindings1.jpg')}
                                alt="Third slide"
                                />  
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div id="scroll-preview">
                    <img id="down-arrow" onClick={scrollToComputing} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>
            </section>

            <section id="computing">
                <div id="item-left">
                <h1>Physical Computing</h1>
                    <p>Most devices require inputs from the environment.
                        We can design and leverage sensor systems to collect smooth and interpolate the data!
                        From there we use the data to make your device act accordingly.</p>
                
                </div>
                <div id="item-right">
                    <h4>Past Projects</h4>
                    <p>We leverage microprocessors, embedded programming and a whole bunch
                        circuity to make these things possible.
                    </p>
                </div>

                <div id="scroll-preview">
                    <img id="down-arrow" onClick={scrollToGraphicDesign} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>
            </section>

            <section id="graphicDesign">
                <div id="item-content">
                    <h1>Graphic Design</h1>
                    <hr/>
                    <p>Maybe you've come all this way and you just need a poster for your next event.</p>
                    <p>Again, we've got you covered.</p>

                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../img/d4d.png')}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-50"
                            src={require('../img/bindings3.jpg')}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </div>

                <div id="item-conclusion">
                </div>
            </section>
        </>
    );
    
}

export default ServicesHome;