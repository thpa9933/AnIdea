import React, { Component } from 'react';

class About extends Component {
    render() {

    var i = 0;

    var imageCycle = new Array();
    imageCycle[0] = "../img/headshots/1.png"
    imageCycle[1] = "../img/headshots/2.png"
    imageCycle[2] = "img/headshots/3.png"
    imageCycle[3] = "img/headshots/4.png"
    imageCycle[4] = "img/headshots/5.png"
    imageCycle[5] = "img/headshots/6.png"
    imageCycle[6] = "img/headshots/7.png"
    imageCycle[7] = "img/headshots/8.png"
    imageCycle[8] = "img/headshots/9.1.png"
    imageCycle[9] = "img/headshots/1.png"

    function cycleImages(){
        i++;
        if(i == 10){
        i = 0;
        }
        document.getElementById('#coverImage').attr('src={require()}', imageCycle[i]);
    }

        function scrollToAbout1() {
            document.getElementById('about-Page-1').scrollIntoView({behavior: "smooth"});
        }

        function scrollToAbout2() {
            document.getElementById('about-Page-2').scrollIntoView({behavior: "smooth"});
        }

        return (
            <div>
                <section>
                    <div id="title">
                        <h1>About</h1>
                        <br/>
                        <p> Were currently a one man show :)</p>
                        <br/>
                        <p> But bear with me...</p>
                    </div>

                    <div id="scroll-preview" >
                        <img id="down-arrow" onClick={scrollToAbout1} src={require('../img/Arrow-down.svg')} height="20px"/>
                    </div>
                </section>

                <section id="about-Page-1">
                    <div id="item-intro">
                        <h2>This is Tom</h2>
                        <p>Tom is the founder of AnIdea.</p>
                        <hr/>
                    </div>
                    <div id="item-content">
                        {/* <img id="coverImage" onclick={cycleImages} onmouseover={cycleImages} src={require("../img/headshots/") } /> */}
                    </div>

                    <div id="item-conclusion">
                        <p>Being a creative technologist, Tom would like to use his skills to help other people bring their ideas to life.</p>
                    </div>

                    <div id="scroll-preview" >
                        <img id="down-arrow" onClick={scrollToAbout2} src={require('../img/Arrow-down.svg')} height="20px"/>
                    </div>
                </section>

                <section id="about-Page-2">
                    <div id="item-intro">
                        <h2>We may be small, but were Mighty</h2>
                        <p>Well - i'm mighty.</p>
                        <hr/>
                    </div>
                    <div id="item-content">
                        
                    </div>

                    <div id="item-conclusion">
                        <p>I'm all about the end user and their experience. Lets build a relationship.</p>
                    </div>
                </section>

            </div>
        );
    }
}

export default About;