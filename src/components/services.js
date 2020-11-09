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
            <div class="Parallax-section">
                <Parallax speed={3}>
                <div id="parallax-obj1">
                    <img src={require('../img/blob.svg')} height="40vh" width="40vw"/>
                </div>
                </Parallax>
                
                <div id="parallax-obj2"></div>

                <div class="parallax-left">
                        <h1>Services</h1>
                        <p>At AnIdea we offer several different services to ensure that
                            we can produce the product you are invisioning.
                        </p>

                        <ul>
                            <li onClick={scrollToResearch}> Research </li>
                            <li onClick={scrollToSoftware}> Software Development </li>
                            <li onClick={scrollToModeling}> 3D Modeling </li>
                            <li onClick={scrollToComputing}> Physical Computing </li>
                            <li onClick={scrollToGraphicDesign}> Graphic Design </li>
                        </ul>
                </div>

                <div class="parallax-right">

                </div>

                <img id="down-arrow" onClick={scrollToResearch} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="research">
                <div class="parallax-left">
                        <h1>Research</h1>
                        <p>Research is seemingly simple but well overlooked.
                            It takes time, resources and sheer interest.
                        </p>
                        <p>
                            Good thing AnIdea loves research. We are more than happy to deep dive into
                            any technical topic you please.
                        </p>
                    
                </div>

                <div class="parallax-right">
                        <h3>What can we help you reserach?</h3>
                        <p>
                            Let us create whitepapers, diagrams,
                            and other meaninful displays of information so you have a solid foundation for development.
                        </p>
                </div>

                <img id="down-arrow" onClick={scrollToSoftware} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="softwareDev">
                <div class="parallax-left">
                        <h1>Software Development</h1>
                        <hr/>
                        <p> We handle web application, personal sites,
                            portfolios, simple e-commerse, you name it.
                        </p>
                        <p>
                            Our lead developer (Tom) is a software engineer.
                            He enjoys UI design and writing web applications (like this one).
                        </p>
                        <p>
                            All of his professional work is proprietary and mussnt' be shared! (Dont take the ones below too seriously)
                        </p>
                </div>

                <div class="parallax-right">
                    <h3>Single-serving-site Examples</h3>
                    <div class="weblinks">
                        <ul>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/ClockWork/index.html">Clockwork</li>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/Faux/index.html">MockCompany</li>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/bashLove.html">BashLove</li>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/gitLove.html">GitLove</li>
                        </ul>
                        <ul>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/githubLove.html">GitHubLove</li>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/Animation/index.html">Michael Jackson</li>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/SpriteSheets/index.html">SpriteSheets</li>
                            <li href="http://creative.colorado.edu/~thpa9933/DEV/Message/index.html">Breathe</li>
                        </ul>
                    </div>
                </div>
                <img id="down-arrow" onClick={scrollToModeling} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="modeling">
                <div class="image-section">
                        <h1>3D Modeling</h1>
                        <p> Modeling and rendering is an excellent way to get a better grasp on what your
                            tangeble product will look like. It helps with hone proper ergonomics, form, and functionality.
                        </p>
                    
                </div>

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
                <img id="down-arrow" onClick={scrollToComputing} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="computing">
                <div class="parallax-left">
                        <h1>Physical Computing</h1>
                        <p>Most devices require inputs from the environment.</p>
                        <p>We can design and leverage sensor systems to collect smooth and interpolate the data!</p>
                        <p>From there we use the data to make your device act accordingly.</p>
                </div>

                <div class="parallax-right">
                        <h4>Past Projects</h4>
                        <p>We leverage microprocessors, embedded programming and a whole bunch
                            circuity to make these thigns possible.
                        </p>
                </div>

                <img id="down-arrow" onClick={scrollToGraphicDesign} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="graphicDesign">
                <div class="parallax-left">
                        <h1>Graphic Design</h1>
                        <p>Maybe you've come all this way and you just need a poster for your next event.</p>
                        <br/>
                        <p>Again, we've got you covered.</p>
                </div>

                <div class="parallax-right">
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
                            className="d-block w-100"
                            src={require('../img/Furniture1.jpg')}
                            alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../img/Furniture1.jpg')}
                            alt="Third slide"
                            />  
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
           
        </>
    );
    
}

export default ServicesHome;