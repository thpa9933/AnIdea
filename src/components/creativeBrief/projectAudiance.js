import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectAudiance({addAudiance, service}){

        let audianceList = [
            'Age 0 - 20',
            'Age 20 - 40',
            'Age 40+',
            'Business',
            'Sports',
            'People',
            'Local',
            'Culture',
            'Politics',
            'Other'
        ];    

        return (
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
            >
                <section>
                    <div id="item-content">
                    <h2>Let's identify your target audiance.</h2>
                        <p>Select a few from the list below</p>
                        <ul>
                            {audianceList.map(name => {
                                let spanClass = service.serviceAudiance.includes(name) ? 'activeBrief' : '';
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
            </motion.div>
        );
    
}

export default ProjectAudiance;