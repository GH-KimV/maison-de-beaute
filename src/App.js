import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Policies from './components/pages/Policies';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import Gallery from './components/pages/Gallery';
import './scss/App.scss';
import Cursor from './components/layout/Cursor';

const App = () => {
    return (
        <Router>
            <Cursor />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/policies' component={Policies} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/book' component={Booking} />
                <Route exact path='/gallery' component={Gallery} />
            </Switch>
            <Footer/>
        </Router>
    );
};

export default App;
