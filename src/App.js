
import React, { useState } from 'react';
import { Route, HashRouter, Switch} from 'react-router-dom';

// Style Libs
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';

// Header
import Header from './components/header';

// Home
import Home from './components/home';

//Services
import ServicesHome from './components/services';

//Navigation
import Navigation from './components/navigation';

//Breif
import BeginBrief from './components/creativeBrief/beginBrief';
import ProjectDescription from './components/creativeBrief/projectDescription';
import ProjectAudiance from './components/creativeBrief/projectAudiance';
import ProjectScope from './components/creativeBrief/projectScope';
import BriefSummary from './components/creativeBrief/briefSummary';

// About
import About from './components/about';

function App() {

    const [service, setService] = useState({serviceName: "", serviceDescription: "", serviceScope: "", serviceAudiance: []});

    const addServiceName = (name) => {
        setService({ ...service, serviceName: name });
    }

    const addDescription = (description) => {
        setService({ ...service, serviceDescription: description});
    }

    const addScope = (scope) => {
        setService({...service, serviceScope: scope });
    }

    const addAudiance = (audiance) => {
        let newAudiance;

        if(!service.serviceAudiance.includes(audiance)) {
            newAudiance = [...service.serviceAudiance, audiance];
        } else {
            newAudiance = service.serviceAudiance.filter(item => item !== audiance);
        }
        setService({...service, serviceAudiance: newAudiance});
    }


    return (
        
        <div className="wrapper">
            <HashRouter> 
                <Header/>
                <div id="navigation"><Navigation/></div>
                
                <div className="content">
                    <AnimatePresence exitBeforeEnter>
                    <Switch >

                        <Route exact path="/" component={Home}/>

                                            
                        <Route exact path="/Services" component={ServicesHome}/>

                        <Route exact path="/About" component={About}/>

                        <Route exact path="/CreativeBrief">
                            <BeginBrief addServiceName={addServiceName} service={service}/>
                        </Route>

                        <Route exact path="/CreativeBrief/projectDescription">
                            <ProjectDescription addDescription={addDescription} service={service}/>
                        </Route>

                        <Route exact path="/CreativeBrief/projectObjective">
                        </Route>

                        <Route exact path="/CreativeBrief/projectAudiance" >
                            <ProjectAudiance addAudiance={addAudiance} service={service}/>
                        </Route>

                        <Route exact path="/CreativeBrief/projectScope" >
                            <ProjectScope addScope={addScope} service={service}/>
                        </Route>

                        <Route exact path="/CreativeBrief/Summary" >
                            <BriefSummary service={service}/>
                        </Route>

                        <Route render={function () { return <p> Route not found :( </p>}} />

                    </Switch>
                    </AnimatePresence>
                </div>
                
            </HashRouter>
        
        </div>
    )
}

export default App;