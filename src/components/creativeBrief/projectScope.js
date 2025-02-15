import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                    <p>Can we break the work into milestones?</p>
                    <p>What is the time frame?</p>
                    <p>What do you consider to be a successful?</p>
                    <hr/>
                </div>

                <div id="item-content">
                    <div className="form-group shadow-textarea">
                        <textarea className="form-control z-depth-1" rows="10" onChange={handleScope}></textarea>
                    </div>

                </div>

                <div id="item-conclusion">
                    <Link to="/CreativeBrief/projectAudiance">
                        <div id="nextButton">Choose the audiance</div>
                    </Link>
                </div>
            </section>

        </motion.div>
    );
    
}


export default ProjectScope;