import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';

// const pageVariants = {
//     initial: {
//         opacity: 0,
//         x: "-100vw"
//     },
//     in: {
//         opacity: 1,
//         x: 0
//     },
//     out: {
//         opacity: 0,
//         x: "100vw"
//     }
// };

// const pageTranstion = {
//     type: "tween",
//     ease: "anticipate", 
//     duration: 1
// }

// const pageStyle = {
//     position: 
// }

// <motion.div
// style = {pageStyle}
// intital = "initial"
// animate= "in"
// exit= "out"
// variants= {pageVariants}
// transition= {pageTranstion}
// >

class Modeling extends Component {

    // create an array holding all image paths

    render(){
        return (
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
            >
                <section>
                    <h2>3D Modeling</h2>
                    <div>
                        <LazyLoad height={200}>
                            <img src={require('../../img/Furniture1.jpg')} height="200px" />
                        </LazyLoad>
                    </div>
                    <p id="item-caption">3D Modeling adds another demnsion to to your sketching, design ideas and understanding.
                        Check some examples of our work below.
                    </p>
                </section>
                <section>
                    <h2>Rendering</h2>
                    <div>
                        <LazyLoad height={200} offset={200}>
                            <img src={require('../../img/Furniture1.jpg')} height="200px" />
                        </LazyLoad>
                    </div>

                    <p>Our main rendering engine is Fusion360.</p>
                </section>
                <section>
                    <h2>subtitle</h2>
                </section>
            </motion.div>
        );
    }
}

export default Modeling;