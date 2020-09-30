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

    const init = () => {
        new SmoothScroll(document, 120, 12)
    
        function SmoothScroll(target, speed, smooth) {
            if (target === document)
                target = (document.scrollingElement
                    || document.documentElement
                    || document.body.parentNode
                    || document.body) // cross browser support for document scrolling
    
            let moving = false
            let pos = target.scrollTop
            let frame = target === document.body
                && document.documentElement
                ? document.documentElement
                : target // safari is the new IE
    
            target.addEventListener('mousewheel', scrolled, { passive: false })
            target.addEventListener('DOMMouseScroll', scrolled, { passive: false })
    
            function scrolled(e) {
                e.preventDefault(); // disable default scrolling
    
                let delta = normalizeWheelDelta(e)
    
                pos += -delta * speed
                pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
    
                if (!moving) update()
            }
    
            function normalizeWheelDelta(e) {
                if (e.detail) {
                    if (e.wheelDelta)
                        return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
                    else
                        return -e.detail / 3 // Firefox
                } else
                    return e.wheelDelta / 120 // IE,Safari,Chrome
            }
    
            function update() {
                moving = true
    
                let delta = (pos - target.scrollTop) / smooth
    
                target.scrollTop += delta
    
                if (Math.abs(delta) > 0.5)
                    requestFrame(update)
                else
                    moving = false
            }
    
            let requestFrame = function () { // requestAnimationFrame cross browser
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (func) {
                        window.setTimeout(func, 1000 / 50);
                    }
                );
            }()
        }
    }

    return (
        <Router>
            <Cursor />
            <Switch onLoad={init()}>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/policies' component={Policies} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/book' component={Booking} />
                <Route exact path='/gallery' component={Gallery} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
