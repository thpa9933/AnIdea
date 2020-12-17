import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BeginBrief = ({ addServiceName, addUsername, addEmail, service }) => {
        let serviceNames = [
            'Physical Device',
            'Website or Web Application',
            '3D Model and/or Renderings',
            'Graphic Art or Media Design',
            'Mechanical part design'
        ];    

    const handleUsername = e => {
        addUsername(e.target.value);
    }

    const handleEmail = e => {
        addEmail(e.target.value);
    }
    
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            <section>
                <ul id="item-content">
                <h2>Lets start here.</h2>
                    
                    <form id="userInfo">
                        <p>Fill out your</p>
                        <input id="userText" text="text" placeholder="name" onChange={handleUsername}/>
                        <p>And</p>
                        <input id="userText" text="text" placeholder="email" onChange={handleEmail}/>
                    </form>

                    <p> Generally speaking, what will the final product look like?</p>
                    <hr/>
                    {serviceNames.map(name => {
                        let spanClass = service.serviceName.includes(name) ? 'activeBrief' : '';
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