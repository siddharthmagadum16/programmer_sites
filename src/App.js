import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from  './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
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
    return(
      <div className="App style">
        <div className="style">
          <Navigation className="navigation"/>
          if(this.state.currentpg=='home'){
            <Home/>
          }
        </div>
      </div>
    )
  }
}

export default App;
