import React from 'react';
import './App.css';
import Nav from './Nav.js';
import HomeCard from './HomeCard.js';

/**
 * This class is the first called in React. It is used to collect the homecards along with showing the highest level components.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeCards:[]
    };
    var self = this;
    //Get the homecards from the api
    fetch('http://localhost:3001/',{
    mode:'cors'
    })
    .then(response => response.json()) //Returns the Json promise
    .then(data => {
      self.setState({
        homeCards:data.homecards
      });
    });
  }
  render() {
    return (
      <div className="App">
      <Nav />
      <div className='cards'>
      {this.state.homeCards.map((card,index) => <HomeCard card={card} key={index} />)}
      </div>
    </div>
    );
  }
}

export default App;
