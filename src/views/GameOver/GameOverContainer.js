
import React, { Component } from 'react';
import GameOver from './GameOver';
import { withRouter } from 'react-router-dom';

class GameOverContainer extends Component {
    componentDidMount() {
        
    }
    render () {
        return (
            <GameOver></GameOver>
        );
    }
}

export default withRouter(GameOverContainer);