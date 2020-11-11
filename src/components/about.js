import React, { Component } from 'react';

class About extends Component {
    render() {

    //var i = 0;
    // var imageCycle = new Array();
    // imageCycle[0] = require('../img/headshots/1.png')
    // imageCycle[1] = require('../img/headshots/2.png')
    // imageCycle[2] = "img/headshots/3.png"
    // imageCycle[3] = "img/headshots/4.png"
    // imageCycle[4] = "img/headshots/5.png"
    // imageCycle[5] = "img/headshots/6.png"
    // imageCycle[6] = "img/headshots/7.png"
    // imageCycle[7] = "img/headshots/8.png"
    // imageCycle[8] = "img/headshots/9.1.png"
    // imageCycle[9] = "img/headshots/1.png"

    // function cycleImages(){
    //     i++;
    //     if(i == 10){
    //     i = 0;
    //     }
    //     $('#coverImage').attr('src', require(imageCycle[i]));
    // }

        function scrollToAbout1() {
            document.getElementById('about-Page-1').scrollIntoView({behavior: "smooth"});
        }

        function scrollToAbout2() {
            document.getElementById('about-Page-2').scrollIntoView({behavior: "smooth"});
        }

        return (
            <>
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
                    <div id="item-content">
                        <h2>This is Tom</h2>
                        <p>Tom is the founder of AnIdea. 
                            Being a creative technologist, Tom would like to use his skills to help other people bring their ideas to life.</p>
                        <hr/>
                    {/* onmouseover={cycleImages} */}
                        <img id="coverImage" src={require("../img/headshots/headshot.gif") } />
                    </div>

                    <div id="scroll-preview">
                        <img id="down-arrow" onClick={scrollToAbout2} src={require('../img/Arrow-down.svg')} height="20px"/>
                    </div>
                </section>

                <section id="about-Page-2">
                    <div id="item-content">
                        <h2>We may be small, but were Mighty</h2>
                        <p>Well - i'm mighty.</p>
                        <hr/>
                        <p>All my life I have been deeply interested in form, functionality, and visual design.</p>
                        <p>During college I was largely into physical computing. I would design, 3D model, fabricate, and program whichever
                            idea i had concocted. I'd then create graphic boards, give presentations and try to impress an audiance as
                            to why my product is so neat.
                        </p>
                        <p>
                            I didn't only build toys though. I've worked extensivly programming a 3D modeling engine, cyber simulations, novel medical hardware,
                            and now I currently write software for the Joint Strike Fighter. If you need work on your motorcycle - I'm a bit of a motorhead as well..
                        </p> 

                        <p>So all in all i'm a Jack. I love seeing ideas come to life and I have accumulated a broad
                            skillset to make that happen. So if you provide me with AnIdea - i'll create it.</p>
                    </div>
                </section>

            </>
        );
    }
}

export default About;