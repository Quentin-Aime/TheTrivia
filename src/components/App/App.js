import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';
import GameOverContainer from '../../views/GameOver/GameOverContainer';
import VictoryContainer from '../../views/Victory/VictoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/categories/:name' component={CategoryContainer} />
            <Route exact path='/gameover' component={GameOverContainer} />
            <Route exact path='/victory' component={VictoryContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;