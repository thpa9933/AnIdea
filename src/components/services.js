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
                <div class="parallax-left">
                    <Parallax speed={-5}>
                        <h1>Services</h1>
                        <p>At AnIdea we offer several different services to ensure that
                            we can produce the product you are invisioning.
                        </p>
                    </Parallax>
                </div>

                <div class="parallax-right">
                    <Parallax speed={5}>
                        <ul>
                            <li>
                                <button onClick={scrollToResearch}> Research </button>
                                <button onClick={scrollToSoftware}> Software Development </button>
                                <button onClick={scrollToModeling}> 3D Modeling </button>
                                <button onClick={scrollToComputing}> Physical Computing </button>
                                <button onClick={scrollToGraphicDesign}> Graphic Design </button>
                            </li>
                        </ul>
                    </Parallax>
                </div>

                <img id="down-arrow" onClick={scrollToResearch} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="research">
                <div class="parallax-left">
                    <Parallax speed={1}>
                        <h1>Research</h1>
                        <p>Research is seemingly simple but well overlooked.
                            It takes time, resources and sheer interest.
                        </p>
                    </Parallax>
                </div>

                <div class="parallax-right">
                    <Parallax speed={-2}>
                        <p>
                            AnIdea loves research. We are more than happy to deep dive into
                            any technical topic you please.
                        </p>
                        <p>
                            We can help create whitepapers, diagrams,
                            and other meaninful displays of information so you have a solid foundation for development.
                        </p>
                    </Parallax>
                </div>

                <img id="down-arrow" onClick={scrollToSoftware} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="softwareDev">
                <div class="parallax-left">
                    <Parallax speed={0}>
                        <h1>Software Development</h1>
                        <p> We handle web application, personal sites,
                            portfolios, simple e-commerse, you name it.
                        </p>
                    </Parallax>
                </div>

                <div class="parallax-right">
                    <Parallax speed={0}>
                        <p>
                            Our lead developer (Tom) is a software engineer.
                            He enjoys UI design and writing web applications (like this one).
                        </p>
                        <p>
                            All of his professional work is proprietary and mussnt' be shared! (Dont take the ones below too seriously)
                        </p>
                    </Parallax>
                </div>

                <div class="webLinks">
                    <Parallax speed={0}>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/ClockWork/index.html" class="btn btn-primary">Clockwork</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/Faux/index.html" class="btn btn-primary">MockCompany</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/bashLove.html" class="btn btn-primary">BashLove</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/gitLove.html" class="btn btn-primary">GitLove</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/LoveLetters/githubLove.html" class="btn btn-primary">GitHubLove</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/Animation/index.html" class="btn btn-primary">Michael Jackson</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/SpriteSheets/index.html" class="btn btn-primary">SpriteSheets</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/Message/index.html" class="btn btn-primary">Breathe</a>
                            <a href="http://creative.colorado.edu/~thpa9933/DEV/Parallax/parallax.html" class="btn btn-primary">ParallaxDoggo</a>
                    </Parallax>
                </div>
                <img id="down-arrow" onClick={scrollToModeling} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="modeling">
                <div class="image-section">
                    <Parallax speed={0}>
                        <h1>3D Modeling</h1>
                        <p> Modeling and rendering is an excellent way to get a better grasp on what your
                            tangeble product will look like. It helps with hone proper ergonomics, form, and functionality.
                        </p>
                    </Parallax>
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
                <img id="down-arrow" onClick={scrollToComputing} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="computing">
                <div class="parallax-left">
                    <Parallax speed={0}>
                        <h1>Physical Computing</h1>
                        <p>Most devices require inputs from the environment.</p>
                        <p>We can design and leverage sensor systems to collect smooth and interpolate the data!</p>
                        <p>From there we use the data to make your device act accordingly.</p>
                    </Parallax>
                </div>

                <div class="parallax-right">
                    <Parallax speed={0}>
                        <h4>Past Projects</h4>
                        <p>We leverage microprocessors, embedded programming and a whole bunch
                            circuity to make these thigns possible.
                        </p>
                    </Parallax>
                </div>

                <img id="down-arrow" onClick={scrollToGraphicDesign} src={require('../img/Arrow-down.svg')} height="20px"/>
            </div>

            <div class="Parallax-section" id="graphicDesign">
                <div class="parallax-left">
                    <Parallax speed={0}>
                        <h1>Graphic Design</h1>
                        <p>Maybe you've come all this way and you just need a poster for your next event.</p>
                    </Parallax>
                </div>

                <div class="parallax-right">
                    <Parallax speed={0}>
                            <p>Again, we've got you covered.</p>
                    </Parallax>
                </div>
            </div>


           
        </>
    );
    
}

export default ServicesHome;