import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

const BriefSummary = ({service}) => {

    const onSubmitForm = async e => {
        //Don't refresh
        e.preventDefault();
        try {
            const body = { service };
            const response = await fetch("http://localhost:5000/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            <section>
                <div id="item-content">
                    <h2>Congrats {service.serviceUsername}, you're all set.</h2>
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
                    <Button variant="dark" onClick={onSubmitForm}>Submit!</Button>
                </div>

            </section>
        </motion.div>
    );
}


export default BriefSummary;