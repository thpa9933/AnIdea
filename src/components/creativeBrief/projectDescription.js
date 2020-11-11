import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectDescription({addDescription, service}){

    const handleDescription = e => {
        addDescription(e.target.value);
    }

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            <section>
                <div id="item-intro">
                    <h2>Describe your Idea</h2>
                    <p>What problem are you trying to solve? Whats your objective?</p>
                    <hr/>
                </div>
                <div id="item-content">
                    <div class="form-group shadow-textarea">
                        <textarea class="form-control z-depth-1" rows="10" onChange={handleDescription}></textarea>
                    </div>

                </div>

                <div id="item-conclusion">

                    <Link to="/CreativeBrief/projectScope">
                        <div id="nextButton">Define the Scope</div>
                    </Link>
                  
                </div>
            </section>

        </motion.div>
    );
    
}


export default ProjectDescription;