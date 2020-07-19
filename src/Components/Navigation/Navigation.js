import React from 'react';
import './Navigation.css';
import 'tachyons';
const Navigation = ( onRouteChange) =>{
    // const navfirstchild=document.getElementsByClassName('navigation')


    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <nav className="pa2">

                <ul>
                    <li className="logo image"><img className="img" src="./programmer_logo.png" width="100px" height="50px"/></li>
                    <li className="logo">All-in-One </li>
                    <li><a className="items" href="/" title="Documentation">About </a></li>
                    <li><a className="items" href="/" title="Store">Documentation </a></li>
                    <li><a className="items" href="/" title="Home">Home           </a></li>
                </ul>
            </nav>
            <image src="./programmer_logo.png" alt="img1" />

        </div>
    )
}

export default Navigation;
// style={{ 'textAlign':'right' }}>
//             <image src='./programmer_logo.png' alt='img' style={{ 'height':'50px' }} />
// link dim black    outline pa2  f5-ns dib mr3
// link dim black    outline pa2  f5-ns dib mr3
// link dim black    outline pa2  f5-ns dib mr3
// link dim black    outline pa2  f5-ns dib mr3
// link dim black    outline pa2  f5-ns dib"