import React from 'react';
import './Home.css';
const Home=()=>{
    return (
        <div className="main1 ">
            <div className='homeimage'>
            <img className='bigimg' src='https://www.achats-economiz.com/wp-content/uploads/2019/11/1920x1280-fourniture.jpg' alt='home intro img'  />
            <p className=" intro">Don't waste your <b>TIME</b><br/> by searching the most used coding sites <b>Everytime</b></p>
            </div>
            <div className='container'>
                <p className='heading'>General</p>
                <div className="grid ">
                    <a className='element' href='https://stackoverflow.com/questions' target="_blank" rel="noopener noreferrer"><img style={{'background':'black','height':'13rem', 'padding':'19px'}} src='http://market.designmodo.com/wp-content/uploads/2015/06/stack-overflow-logo.png' alt='stackoverflow'/>
                        <p>Stackoverflow</p>
                        <p>Where developers learn, share their programming knowledge</p>
                    </a>
                    <a className='element' href='https://github.com/' target="_blank" rel="noopener noreferrer"><img style={{'background':'white'}} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/>
                        <p>Github</p>
                        <p>Build software better, together</p>
                    </a>
                    <a className='element' href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"><img style={{'background':'black','height':'12rem','width':'15rem','padding':'1rem'}} src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png' alt='youtube'/>
                        <p>YouTube</p>
                        <p>An adavantage to learn effeciently for free</p>
                    </a>
                </div>
                <p className='heading'>Competetive Programming</p>
                <div className="grid ">
                    <a className='element' href='https://clist.by/' target="_blank" rel="noopener noreferrer"><img  style={{'background':'white'}} src='https://image.flaticon.com/icons/svg/35/35771.svg' alt='Clist'/>
                        <p>Clist</p>
                        <p>A list and calender of all upcoming and ongoing programming contests</p>
                    </a>
                    <a className='element' href='https://www.codechef.com/' target="_blank" rel="noopener noreferrer"><img  src='https://vinitshahdeo.github.io/CodeChef-VIT-Website/img/about/logo.jpeg' alt='codechef' style={{ 'height':'175px'}} />
                        <p>Codechef</p>
                        <p>A Platform for Aspiring Programmers</p>
                    </a>
                    <a className='element' href='https://codeforces.com/' target="_blank" rel="noopener noreferrer"><img  src='https://www.ime.usp.br/~arcjr/image/codeforces.png' alt='codeforces'/>
                        <p>Codeforces</p>
                        <p>One of the best for competitive programming contests</p>
                    </a>
                    <a className='element' href='https://www.hackerrank.com/' target="_blank" rel="noopener noreferrer"><img  src='https://lh5.googleusercontent.com/-_ZoFw2eSPuc/AAAAAAAAAAI/AAAAAAAAABU/h_1BVjXdeZA/photo.jpg?sz=500' alt='hackerrank' />
                        <p>Hackerrank</p>
                        <p>Focuses on competitive programming challenges for both consumers and businesses</p>
                    </a>
                    <a className='element' href='https://www.hackerearth.com/' target="_blank" rel="noopener noreferrer"><img  src='https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1445268576/bus7umjcy0wqunjefizi.jpg' alt='hackerearth' />
                        <p>HackerEarth</p>
                        <p>Enterprise software that helps organisations with their technical recruitment needs</p>
                    </a>
                    <a className='element' href='https://www.spoj.com/' target="_blank" rel="noopener noreferrer"><img  src='https://www.gravatar.com/avatar/bf6647dbd06b7d20690d676c061cbd10?s=290&20200607' alt='spoj' />
                        <p>Sphere Online Judge</p>
                        <p>Learn how to code and build efficient algorithms</p>
                    </a>
                    <a className='element' href='https://leetcode.com/problemset/all/' target="_blank" rel="noopener noreferrer"><img src='https://qph.fs.quoracdn.net/main-qimg-9dc5e653db6feed9aec73b08e5240ec6' alt='leetcode' />
                        <p>Leetcode</p>
                        <p>Best platform to help you enhance your skills and prepare for technical interviews</p>
                    </a>
                    <a className='element' href='https://www.topcoder.com/challenges' target="_blank" rel="noopener noreferrer"><img src='http://tse2.mm.bing.net/th/id/OIP.QtoBdmeZ5bm-U4ukGG1ChwHaHa?pid=Api&rs=1' alt='topcoder' />
                        <p>Topcoder</p>
                        <p>A platform for competetive programming for experts</p>
                    </a>
                    <a className='element' href='https://codingcompetitions.withgoogle.com/' target="_blank" rel="noopener noreferrer"><img  src='http://301stockinvesting.com/wp-content/uploads/2018/06/filegoogle-g-logo-svg-wikimedia-commons-inside-google-g-icon-png.png' alt='google' />
                        <p>Google Coding competetions</p>
                        <p>Coding competetions held by google for students all over the world</p>
                    </a>
                </div>
                <p className='heading'>Web Development</p>
                <div className='grid'>
                    <a className='element' href='https://www.w3schools.com/' target="_blank" rel="noopener noreferrer"><img  src='http://cdn.impressivewebs.com/2014-02/w3schools-logo.jpg' alt='w3schools' />
                        <p>W3schools</p>
                        <p> The world's largest web developer site</p>
                    </a>
                    <a className='element' href='https://developer.mozilla.org/en-US/' target="_blank" rel="noopener noreferrer"><img style={{'background':'black'}} src='http://blog.seanmartell.com/wp-content/uploads/2013/10/logo_0014_80.png' alt='mdn' />
                        <p>MDN web docs</p>
                        <p>Resources for developers, by developers</p>
                    </a>
                    <a className='element' href='https://css-tricks.com/' target="_blank" rel="noopener noreferrer"><img style={{ 'height':'12rem','background':'black','padding':'2rem'}} src='https://css-tricks.com/favicon.ico' alt='csstricks' />
                        <p>CSS - Tricks</p>
                        <p>Modern and advanced techniques for CSS form the developers</p>
                    </a>
                    <a className='element' href='https://caniuse.com/' target="_blank" rel="noopener noreferrer"><img style={{ 'height':'12rem'}} src='https://caniuse.com/img/favicon-128.png' alt='caniuse' />
                        <p>Can I use</p>
                        <p>Browser support tables for modern web technologies</p>
                    </a>
                    <a className='element' href='https://getbootstrap.com/' target="_blank" rel="noopener noreferrer"><img style={{ 'height':'12rem','background':'black'}} src='https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png' alt='bootstrap' />
                        <p>Bootstrap</p>
                        <p>The world’s most popular front-end open source toolkit</p>
                    </a>
                    <a className='element' href='https://animate.style/' target="_blank" rel="noopener noreferrer"><img style={{ 'background':'black','padding-bottom':'1rem'}} src='http://tecnologiaenvivo.com/wp-content/uploads/2013/12/logo_CSS3-1.png' alt='animate.css' />
                        <p>Animate.css</p>
                        <p>Just-add-water CSS animations</p>
                    </a>
                    <a className='element' href='https://www.npmjs.com/' target="_blank" rel="noopener noreferrer"><img src='https://www.w3schools.com/whatis/img_npm.jpg' alt='npm' />
                        <p>NPM</p>
                        <p>A package manager for the JavaScript programming language</p>
                    </a>
                    <a className='element' href='https://yarnpkg.com/' target="_blank" rel="noopener noreferrer"><img src='https://avatars1.githubusercontent.com/u/22247014?v=3&s=400' alt='yarn' />
                        <p>Yarn</p>
                        <p>A package manager that doubles down as project manager</p>
                    </a>
                </div>
                <p className='heading'>Android/IOS App development</p>
                <div className="grid ">
                    <div className='element'>NA</div>
                    <div className='element'>NA</div>
                    <div className='element'>NA</div>
                    <div className='element'>NA</div>
                    <div className='element'>NA</div>
                    <div className='element'>NA</div>
                </div>
            </div>
        </div>
    )
}

export default Home;