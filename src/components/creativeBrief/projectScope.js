import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ProjectScope({addScope, service}){

    const handleScope = e => {
        addScope(e.target.value);
    }

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            <section>
                <div id="item-intro">
                    <h2>Lets talk about project scope.</h2>
                    <p>I want to compete XXX milestones</p>
                    <p>In X about of time</p>
                    <p>What do you consider to be a successful</p>
                    <hr/>
                </div>

                <div id="item-content">
                    <div class="form-group shadow-textarea">
                        <textarea class="form-control z-depth-1" rows="10" onChange={handleScope}></textarea>
                    </div>

                </div>

                <div id="item-conclusion">
                    <Link to="/CreativeBrief/projectAudiance">
                        <div id="nextButton">Go to next selection</div>
                    </Link>
                </div>
            </section>

        </motion.div>
    );
    
}


export default ProjectScope;