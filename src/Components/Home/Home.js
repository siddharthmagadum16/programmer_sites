import React from 'react';
import './Home.css';
import stackoverflow from './stackoverflowlogo.png';
import googlelogo from './google-logo.png';
import mdnweb from './mdnweb.png';
import w3c from './w3schoolslogo.jpg';
import csstricks from './csstricks.ico';

const Home=()=>{
    return (
        <div className="main1 ">
            <div className='homeimage'>
            <img className='bigimg' style={{'filter':'brightness(40%)'}}src='https://www.achats-economiz.com/wp-content/uploads/2019/11/1920x1280-fourniture.jpg' alt='home intro img'  />
            {/* <p className=" intro">Don't waste your <b>TIME</b><br/> by searching the most used coding sites <b>Everytime</b></p> */}
            <p className=" intro">All programming sites at one place</p>
            </div>
            <div className='container'>
                <p className='heading'>General</p>
                <div className="grid ">
                    <a className='element' href='https://stackoverflow.com/questions' target="_blank" rel="noopener noreferrer">
                        <img style={{'background':'black','height':'13rem', 'padding':'19px'}} src={stackoverflow} alt='stackoverflow'/>
                        <p>Stackoverflow</p>
                        <p>Where developers learn, share their programming knowledge</p>
                    </a>
                    <a className='element' href='https://github.com/' target="_blank" rel="noopener noreferrer"><img style={{'background':'white'}} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/>
                        <p>Github</p>
                        <p>Build software better, together</p>
                    </a>
                    <a className='element' href='https://www.geeksforgeeks.org/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' alt='GFG'/>
                        <p>GeeksforGeeks</p>
                        <p>A computer science portal for geeks</p>
                    </a>
                    <a className='element' href='https://youtube.com/' target="_blank" rel="noopener noreferrer">
                        <img style={{'background':'black'}} src='https://3.bp.blogspot.com/-NV9ceZus5dc/XHEdApWlqgI/AAAAAAAAC8U/OUSGPfQsQ7wUwPsRZvtyDlp2BbXmOhRqwCLcBGAs/s1600/hd-youtube-logo-png-transparent-background-20.png' alt='youtube'/>
                        <p>YouTube</p>
                        <p>Learn effeciently</p>
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
                    <a className='element' href='https://codingcompetitions.withgoogle.com/' target="_blank" rel="noopener noreferrer"><img  src={googlelogo} style={{'background':'black','padding':'8px'}} alt='google' />
                        <p>Google Coding competetions</p>
                        <p>Coding competetions held by Google</p>
                    </a>
                    <a className='element' href='https://projecteuler.net/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://lh3.ggpht.com/-6dnnohel12U/TpNfySdnF1I/AAAAAAAAAB0/bW0vdjYz2Kg/s1600/Project+euler.jpg' alt='google' />
                        <p>Project Euler</p>
                        <p>Mathematics for competetive programming</p>
                    </a>
                </div>
                <p className='heading'>Web Development</p>
                <div className='grid'>
                    <a className='element' href='https://www.w3schools.com/' target="_blank" rel="noopener noreferrer"><img  src={w3c} alt='w3schools' />
                        <p>W3schools</p>
                        <p> The world's largest web developer site</p>
                    </a>
                    <a className='element' href='https://developer.mozilla.org/en-US/' target="_blank" rel="noopener noreferrer"><img style={{'background':'black'}} src={mdnweb} alt='mdn' />
                        <p>MDN web docs</p>
                        <p>Resources for developers, by developers</p>
                    </a>
                    <a className='element' href='https://css-tricks.com/' target="_blank" rel="noopener noreferrer"><img style={{ 'height':'12rem','background':'black','padding':'2rem'}} src={csstricks} alt='csstricks' />
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
                    <a className='element' href='https://devcenter.heroku.com/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://maxcdn.icons8.com/Color/PNG/512/Logos/heroku-512.png' alt='heroku'/>
                        <p>Heroku</p>
                        <p>Learn about building, deploying, and managing your apps on Heroku</p>
                    </a>
                    <a className='element' href='https://docs.netlify.com/' target="_blank" rel="noopener noreferrer">
                        <img style={{ 'background':'black','padding':'2rem'}} src='https://www.netlify.com/img/press/logos/logomark.png' alt='netlify'/>
                        <p>Netlify</p>
                        <p>Netlify is an all-in-one platform for automating modern web projects</p>
                    </a>
                    <a className='element' href='https://wordpress.org/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://s.w.org/style/images/about/WordPress-logotype-wmark.png' alt='Wordpress'/>
                        <p>Wordpress.org</p>
                        <p>WordPress is open source software you can use to create a beautiful website, blog, or app</p>
                    </a>
                </div>
                <p className='heading'>Android/IOS App development</p>
                <div className="grid ">
                <a className='element' href='https://developer.android.com/docs' target="_blank" rel="noopener noreferrer">
                        <img  src='https://yt3.ggpht.com/a/AATXAJwTpE9TzSl-1zmo9OeEkfjWmi3DVQ51IW2-ug=s900-c-k-c0xffffffff-no-rj-mo' alt='Androiddev'/>
                        <p>Android Developers</p>
                        <p>Build anything on Android</p>
                    </a>
                    <a className='element' href='https://developer.apple.com/' target="_blank" rel="noopener noreferrer">
                        <img style={{'background':'black'}} src='https://www.litmos.com/wp-content/uploads/2016/01/apple-icon.png' alt='appledev'/>
                        <p>IOS</p>
                        <p>Learn, Build, and Innovate</p>
                    </a>
                    <a className='element' href='https://unity.com/' target="_blank" rel="noopener noreferrer">
                        <img  src='http://torrentfreak.com/images/unity-logo.jpg' alt='unity'/>
                        <p>Unity</p>
                        <p>Start bringing your vision to life today with the Unity real-time 3D development platform</p>
                    </a>
                    <a className='element' href='https://www.unrealengine.com/en-US/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://yt3.ggpht.com/-GvSh79CS6-k/AAAAAAAAAAI/AAAAAAAAAAA/tUYENAqlnYo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' alt='unity'/>
                        <p>Unreal Engine</p>
                        <p>Start bringing your vision to life today with the Unity real-time 3D development platform</p>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Home;