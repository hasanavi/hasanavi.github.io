import React from 'react';
import Intro from '../../components/Intro/Intro';
import KeepInTouch from '../../components/KeepInTouch/KeepInTouch';
import { Link } from 'react-router-dom';

import clients from '../../assets/images/clients.png';

const home = (props) => (
    <React.Fragment>
        <h1>About Me</h1>
        <Intro className="long" >
            <span className="intro-text">Hello, My name is Hasan Azizul Haque</span>
            <span className="intro-copy">I'm a London based Javascript Developer. I have over 14 years experience (5 years full stack + 9 years front-end) 
                developing web and mobile application. I love building unique, efficient site and passionate about writing clean code.</span>
        </Intro>
        <KeepInTouch />
        <h2 className="h3 text-center">I've been lucky to work on these projects:</h2>
        <Link to="/work">
            <img src={clients} alt="all clients logo" />
        </Link>
    </React.Fragment>
);

export default home;
