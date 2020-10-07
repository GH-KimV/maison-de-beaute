import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { init } from './util/appFunctions';

import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Policies from './components/pages/Policies';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import Gallery from './components/pages/Gallery';
import Cursor from './components/layout/Cursor';
import SelectedServices from './components/layout/SelectedServices';

import './scss/App.scss';

const App = () => {

    const [serviceKey, setServiceKey] = useState("");

    useEffect(() => {
        const localData = localStorage.getItem('serviceKey');
        if (localData) setServiceKey(JSON.parse(localData));
    }, [])

    useEffect(() => {
        localStorage.setItem('serviceKey', JSON.stringify(serviceKey))
    })

    window.addEventListener('popstate', e => {
        setServiceKey('');
    });

    let dynamicRoute = `/services/`
    if (serviceKey) dynamicRoute += `${serviceKey.toLowerCase()}`;

    return (
        <Router>
            <Cursor />
            <Switch onLoad={init()}>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/policies' component={Policies} />
                <Route
                    exact path='/services'
                    component={(props) => <Services setServiceKey={setServiceKey} dynamicRoute={dynamicRoute} history={props.history} {...props} />}
                />
                <Route
                    exact path={dynamicRoute}
                    component={() => <SelectedServices serviceKey={serviceKey} />}
                />
                <Route exact path='/book' component={Booking} />
                <Route exact path='/gallery' component={Gallery} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
