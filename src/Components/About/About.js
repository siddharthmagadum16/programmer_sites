import React from 'react';
import './About.css';
const About=()=>{
    return (
        <div className="main3 ">
            <div className='containera'>
                <p>
                Are you tired of spending your time searching most used programming websites daily?
                Then you are at the right place.<br/>
                <img src='https://i.pinimg.com/736x/87/59/67/87596735373c5744ff98ea28c1caac36.jpg' alt='search'></img>
                <br/> Code-in-One provides most of the programming websites in a single click.
                Most used programming sites are listed in home page and the official documentation of frameworks and programming languages
                 can be found at the documentation part of the website.<br/>You could just bookmark or pin a single website to get all the websites readily accessible.
                </p>
            </div>
            <div className='aboutend'>

                <a href='https://github.com/siddharthmagadum16/programmer_sites' target="_blank" rel="noopener noreferrer">
                <svg height="2em" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                    <path fill-rule="evenodd" fill='white' d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>

                <a href='https://www.linkedin.com/in/siddharth-magadum-8390b41a9' target="_blank" rel="noopener noreferrer">
                    <img style={{'background':'white','height':'2em'}} src='http://cdn.onlinewebfonts.com/svg/img_43781.png' alt='in'></img>
                </a>

                <a href='https://twitter.com/SiddharthM963?s=08' target="_blank" rel="noopener noreferrer">
                    <img style={{'height':'2em'}} src='http://carlotta-truman.com/wp-content/uploads/2015/07/twitter_round.png' alt='twitter'></img>
                </a>

            </div>
        </div>
    )
}

export default About;
// https://www.youtube.com/watch?v=xhRkhUm_HRI