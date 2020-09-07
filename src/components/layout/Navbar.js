import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Navbar = ({ selectNavClass }) => {
    return (
        <div className='container-fluid navbar-wrapper' >
            <nav class={selectNavClass}>
                {/* <a class='navbar-brand' href='/book'>
                    Book Now
                </a> */}
                <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarText'>
                    <ul class='navbar-nav mr-auto'>
                    <li class='nav-item'>
                            <a class='nav-link' href='/book'>
                                Book Now
                            </a>
                        </li>
                        {/* <li class='nav-item active'>
                            <a class='nav-link' href='#'>
                                Home <span class='sr-only'>(current)</span>
                            </a>
                        </li> */}
                        <li class='nav-item'>
                            <a class='nav-link' href='/services'>
                                Services
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='/policies'>
                                Customer Services
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='/about'>
                                About
                            </a>
                        </li>
                    </ul>
                    <span class='navbar-text'>MAISON de BEAUTÉ</span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
