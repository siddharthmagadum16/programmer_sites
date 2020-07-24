import React from 'react';
import './Home.css';
const Home=()=>{
    return (
        <div className="main1 ">
            <div className='homeimage'>
            <img src='https://www.achats-economiz.com/wp-content/uploads/2019/11/1920x1280-fourniture.jpg' alt='home intro img'  />
            <p className=" intro">Don't waste your <b>TIME</b><br/> by searching the most used coding sites <b>Everytime</b></p>
            </div>
            <div className='container'>
                <p className='heading'>Competetive Programming</p>
                <div className="grid ">
                    <div className='element'><img src='https://image.flaticon.com/icons/svg/35/35771.svg' alt='Clist'/>
                        <p>Clist</p>
                        <p>A list/calender of all upcoming and ongoing programming contests</p>
                    </div>
                    <div className='element'><img src='http://www.ipu.ac.in/infox15/img/index/events/codester.png' alt='codechef'/>
                        <p>Codechef</p>
                        <p>A Platform for Aspiring Programmers</p>
                    </div>
                    <div className='element'><img src='https://www.ime.usp.br/~arcjr/image/codeforces.png' alt='codeforces'/>
                        <p>Codeforces</p>
                        <p> Best for competitive programming contests</p>
                    </div>
                    <div className='element'><img src='https://3.bp.blogspot.com/-fOOMiuibNYM/WawV2F6fRxI/AAAAAAAAAfw/WelOmBA05FQl2i7gsH0YErPEQ8p1UQ2oQCPcBGAYYCw/s1600/hackerrank-logo.jpg' alt='hackerrank' />
                        <p>Hackerrank</p>
                        <p>Focuses on competitive programming challenges for both consumers and businesses</p>
                    </div>
                    <div className='element'><img src='https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1445268576/bus7umjcy0wqunjefizi.jpg' alt='hackerearth' />
                        <p>HackerEarth</p>
                        <p>HackerEarth provides enterprise software that helps organisations with their technical recruitment needs</p>
                    </div>
                    <div className='element'><img src='' alt='' /></div>
                    <div className='element'><img src='' alt='' /></div>
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
                <p className='heading'>Android/IOS appdevelopment</p>
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