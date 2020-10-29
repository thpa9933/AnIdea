import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BeginBrief = ({ addServiceName, service }) => {
        let serviceNames = [
            'Physical Device',
            'Website or Web Application',
            '3D Model and/or Renderings',
            'Graphic Art or Media Design',
            'Mechanical part design'
        ];    
    
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            <section>
                <div id="item-intro">
                    <h2>Lets start here.</h2>
                    <p> Generally speaking, what will the final product look like?</p>
                    <hr/>
                </div>

                <ul id="item-content">

                    {serviceNames.map(name => {
                        let spanClass = service.serviceName.includes(name) ? 'active' : '';
                        return (
                            <li key={name} onClick={() => addServiceName(name)}>
                                <span className={spanClass}> { name }</span>
                            </li>
                        )
                    })}

                </ul>

                <div id="item-conclusion">

                    {service.serviceName && (
                    <Link to="/CreativeBrief/projectDescription">
                        <div id="nextButton">Describe your project!</div>
                    </Link>
                    )}

                </div>
            </section>

        </motion.div>
    );
}


export default BeginBrief;