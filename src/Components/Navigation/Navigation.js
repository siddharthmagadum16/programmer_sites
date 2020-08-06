import React from 'react';
import './Navigation.css';
import 'tachyons';
// import Home from '../Home/Home';
const Navigation = ( {onRouteChange}) =>{

    return (
        <div className=''>
            <nav className="sticky">
                <ul>
                    <li className="logo1 logo "><img className="navlogo mr3" src="./programmer_logo.png" alt="LogoImg" width="90vw" height="auto"/><b >Code-in-One</b></li>
                    <li className='items home ' onClick={()=> onRouteChange('home')} ><p>  Home           </p> </li>
                    <li className='items docs ' onClick={()=> onRouteChange('docs')} ><p>  Documentations </p> </li>
                    <li className='items about' onClick={()=> onRouteChange('about')}><p>  About          </p> </li>
                    <li className='btn'><p><i className='fas fa fa-bars'></i></p></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;