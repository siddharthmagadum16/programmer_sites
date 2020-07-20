import React from 'react';
import './Navigation.css';
import 'tachyons';
// import Home from '../Home/Home';
const Navigation = ( {onRouteChange}) =>{

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <nav className="pa2">
                <ul>
                    <li className="logo image"><img className="img" src="./programmer_logo.png" alt="LogoImg" width="100px" height="50px"/></li>
                    <li className="logo">All-in-One </li>
                    <li><p onClick={()=> onRouteChange('about')}            className="items about">About                         </p></li>
                    <li><p onClick={()=> onRouteChange('docs')}             className="items docs ">Documentations                </p></li>
                    <li><p onClick={()=> onRouteChange('home')}             className="items home ">Home                          </p></li>
                </ul>
            </nav>

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