import React from 'react';
import './Navigation.css';
import 'tachyons';
// import Home from '../Home/Home';
const Navigation = ( {onRouteChange}) =>{

    return (
        <div className='container'>
            <nav className="sticky">
                <ul>
                    <li className="logo1 logo image"><img className="img" src="./programmer_logo.png" alt="LogoImg" width="100px" height="50px"/><b className='ma2 f2'>All-in-one</b></li>
                    <li className='items home ' onClick={()=> onRouteChange('home')} ><p>  Home           </p> </li>
                    <li className='items docs ' onClick={()=> onRouteChange('docs')} ><p>  Documentations </p> </li>
                    <li className='items about' onClick={()=> onRouteChange('about')}><p>  About          </p> </li>
                    <li className='btn'><p><i className='fas fa fa-bars'></i></p>4</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;