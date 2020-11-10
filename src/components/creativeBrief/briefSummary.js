import React, { Component, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

const BriefSummary = ({service}) => {

    function sendMail() {
        var link = "mailto:thpa9933@colorado.edu"
        + "&subject=" + escape("AnIdea Inquiry")
        + "&body=" + escape(
            service.serviceName, 
            service.serviceDescription,
            service.serviceAudiance,
            service.serviceScope
        )
    ;

    window.location.href = link;
    }

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            <section>
                <div id="item-content">
                    <h2>Congrats, you're all set.</h2>
                    <p>Did we get everything right?</p>
                    <hr/>

                    <h4>Product Category</h4>
                        {service.serviceName}

                    <h4>Description</h4>
                        {service.serviceDescription}

                    <h4>Scope</h4>
                        {service.serviceScope}
                
                    <h4>Audiance</h4>
                    {service.serviceAudiance.map(audianceType => {
                        return (<p>{audianceType} </p> )})}                
                </div>

                <div id="item-conclusion">
                    <Button variant="dark" onClick={sendMail}>Submit!</Button>
                </div>

            </section>
        </motion.div>
    );
}


export default BriefSummary;