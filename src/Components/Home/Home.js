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
                    <a className='element' href='https://stackoverflow.com/questions' target="_blank" rel="noopener noreferrer"><img style={{'background':'black', 'padding':'19px'}} src='http://market.designmodo.com/wp-content/uploads/2015/06/stack-overflow-logo.png' alt='stackoverflow'/>
                        <p>Stackoverflow</p>
                        <p>Where developers learn, share their programming knowledge</p>
                    </a>
                    <a className='element' href='https://github.com/' target="_blank" rel="noopener noreferrer"><img style={{'background':'white'}} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/>
                        <p>Github</p>
                        <p>Build software better, together</p>
                    </a>
                    <a className='element' href='https://github.com/' target="_blank" rel="noopener noreferrer"><img style={{'background':'black','blockSize':'10rem'}} src='https://i.ytimg.com/vi/NcMcIXJuVEk/hqdefault.jpg' alt='youtube'/>
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
                    <a className='element' href='https://www.topcoder.com/challenges' target="_blank" rel="noopener noreferrer"><img className='' src='http://tse2.mm.bing.net/th/id/OIP.QtoBdmeZ5bm-U4ukGG1ChwHaHa?pid=Api&rs=1' alt='topcoder' />
                        <p>Topcoder</p>
                        <p>A platform for competetive programming for experts</p>
                    </a>
                    <a className='element' href='https://codingcompetitions.withgoogle.com/' target="_blank" rel="noopener noreferrer"><img className='' src='http://301stockinvesting.com/wp-content/uploads/2018/06/filegoogle-g-logo-svg-wikimedia-commons-inside-google-g-icon-png.png' alt='google' />
                        <p>Google Coding competetions</p>
                        <p>Coding competetions held by google for students all over the world</p>
                    </a>
                </div>
                <p className='heading'>Web Development</p>
                <div className="grid ">
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                </div>
                <p className='heading'>Android/IOS App development</p>
                <div className="grid ">
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                    <div className='element'>o</div>
                </div>
            </div>
        </div>
    )
}

export default Home;