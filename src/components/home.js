import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Parallax from 'react-rellax';


class Home extends Component {
    render(){
        function scrollToHome1() {
            document.getElementById('home1').scrollIntoView({behavior: "smooth"});
        }

        function scrollToHome2() {
            document.getElementById('home2').scrollIntoView({behavior: "smooth"});
        }

        return (
            <>
                <section id="home0">
                    <div id="title">
                        <h4>So you have</h4>
                        <h1>An Idea</h1>
                        <p>Our focus is to provide you with a product. </p>
                    </div>
                    <div id="scroll-preview">
                        <img id="down-arrow" onClick={scrollToHome1} src={require('../img/Arrow-down.svg')} height="20px"/>
                    </div>

                    <div id="devWarning">
                        <p> * This site is under development, but please enjoy! *</p>
                    </div>
                    
                </section>

                <section id="home1">
                    <div id="title">
                        <h2>We are a Do-it-all agency.</h2>
                        <br/>
                        <p>Whether it be software development, graphic design, part fabrication or physical computing -
                            We have skills and resources to get your idea moving forward.
                        </p>
                    </div>

                    <div id="scroll-preview" >
                        <img id="down-arrow" onClick={scrollToHome2} src={require('../img/Arrow-down.svg')} height="20px"/>
                    </div>
                </section>

                <section id="home2">
                    <div id="item-content">
                        <h2>We Plan,</h2>
                        <br/>
                        <h2>Then Design.</h2>
                        <br/>
                        <h2>Prototype,</h2>
                        <br/>
                        <h2>Then use.</h2>
                        <br/>
                        <p>Boom. You'll have a minimal viable product for your next big pitch.</p>
                    </div>

                    <div id="item-conclusion">
                        <Link id="item-content" to="/CreativeBrief">
                            <div id="nextButton">Let's get started with a creative brief</div>
                        </Link>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;