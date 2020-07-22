import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from  './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Docs from './Components/Docs/Docs';
import About from './Components/About/About';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentpg: 'home'
    }
  }
  onRouteChange=(page)=>{
    this.setState({currentpg: page})
  }

  render (){
    console.log(this.state.currentpg)
    if(this.state.currentpg==='home'){
      return (
        <div>
        <Navigation onRouteChange={this.onRouteChange}/>
          <Home/>
        </div>
      )
    }else if(this.state.currentpg==='docs') {
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <Docs/>
        </div>
      )
    }else if(this.state.currentpg==='about'){
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <About/>
        </div>
      )
    }

  }
}

export default App;
// return(
    //   <div className="App style">

    //       <Navigation className="navigation"/>
    //       {
    //         if(this.state.currentpg==='home'){<Home/>}
    //         else {
    //           <h2>h2</h2>

    //         }

    //       }
      // </div>
    // )
