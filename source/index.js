// Core
import React from 'react';
import { render } from 'react-dom';
import  { BrowserRouter as Router }  from 'react-router-dom';

// Instruments
import './theme/init';

// Intro
import Gallery from './basic-redux';

render(
    <Router>
        <Gallery />
    </Router>,
    document.getElementById('app')
);
