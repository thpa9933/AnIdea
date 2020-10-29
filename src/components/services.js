import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesHome() {
    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);
  
    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);
  
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    function scrollToGraphicDesign() {
        document.getElementById('graphicDesign').scrollIntoView({behavior: "smooth"});
      }

    function scrollToSoftware() {
    document.getElementById('softwareDev').scrollIntoView({behavior: "smooth"});
    }

    function scrollToModeling() {
        document.getElementById('modeling').scrollIntoView({behavior: "smooth"});
    }

    return (
        <>
            <section>
                <div id="title">
                    <h1>Services</h1>
                    <br/>
                    <p> We offer the following services below. </p>
                    <p> Scroll down to check some of our work </p>
                </div>

                <div id="scroll-preview" >
                    <img id="down-arrow" onClick={scrollToGraphicDesign} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>

            </section>

            <section id="graphicDesign">
                <div id="title">
                    <h1>Graphic Design</h1>
                    <br/>
                    <p> Website wireframes, posters, logo? </p>
                </div>

                <div id="scroll-preview" >
                    <img id="down-arrow" onClick={scrollToSoftware} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>
            </section>

            <section id="softwareDev">
                <div id="title">
                    <h1>Software Development</h1>
                    <br/>
                    <p>We handle personal websites, portfolios, e-commerce etc..</p>
                </div>

                <div id="scroll-preview" >
                    <img id="down-arrow" onClick={scrollToModeling} src={require('../img/Arrow-down.svg')} height="20px"/>
                </div>
            </section>

            <section id="modeling">
                <div id="title">
                    <h1>3D modeling</h1>
                    <br/>
                    <p>Mechincal Parts, ergonomic design ..</p>
                </div>
            </section>
        </>
        // <div className="Parallax">
        //     <div
        //     className="Parallax__background-image-1"
        //     style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        //     />
        //     <div
        //     className="Parallax__background-image-2"
        //     style={{ transform: `translateY(${offsetY * .6}px)` }}
        //     />

        //     <div className="specific-service">
        //         <div class="services-item-intro">
        //             <h1> Header </h1>
        //             <h4> Some informationa bout the header</h4>
        //         </div>

        //         <div class="services-item-content">
        //             <img src={require('../img/Furniture1.jpg')} width="80%" height="auto"/>
        //         </div>

        //         <div class="services-item-conclusion">
        //             <p> Concluding description of header </p>
        //         </div>
                
        //     </div>

        // </div>

        // <div class="parallax-content-2 rellax">
        //     <img src={require('../img/Furniture1.jpg')} width="80%" height="auto"/>
        // </div>
    );
    
}

export default ServicesHome;