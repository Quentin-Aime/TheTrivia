import LocalStorage from './../../helpers/LocalStorage';
import React, { Component } from 'react';
import GameOver from './GameOver';
import { withRouter } from 'react-router-dom';

class GameOverContainer extends Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }
    componentDidMount() {
        
    }
    reset() {
        LocalStorage.initialize();
        this.props.history.match('/');
    }
    render () {
        return (
            <GameOver
                resetCallback={this.reset}
            ></GameOver>
        );
    }
}

export default withRouter(GameOverContainer);