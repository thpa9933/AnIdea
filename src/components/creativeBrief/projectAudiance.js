import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ProjectAudiance({addAudiance, service}){

        let audianceList = [
            'Audiance1',
            'Audiance2',
            'Audiance3'
        ];    

        return (
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
            >
                <section>
                    <div id="item-intro">
                        <h2>Let's identify your target audiance.</h2>
                        <p>Select a few from the list below</p>
                    </div>

                    <div id="item-content">
                        <ul>
                            {audianceList.map(name => {
                                let spanClass = service.serviceAudiance.includes(name) ? 'active' : '';
                                return (
                                    <li key={name} onClick={() => addAudiance(name)}>
                                        <span className={spanClass} id="spanSelection"> { name }</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div id="item-conclusion">
                        <Link to="/CreativeBrief/Summary">
                            <div id="nextButton">Complete Brief!</div>
                        </Link>
                    </div>





                </section>
                <section>
                    <h2>subtitle</h2>
                </section>
            </motion.div>
        );
    
}

export default ProjectAudiance;