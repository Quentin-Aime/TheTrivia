import LocalStorage from './../../helpers/LocalStorage';
import React, { Component } from 'react';
import GameOver from './GameOver';
import { withRouter } from 'react-router-dom';
import Reset from '../../components/Reset/Reset';

class GameOverContainer extends Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }
    componentDidMount() {
        
    }
    reset() {
        LocalStorage.initialize();
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <GameOver
                    resetCallback={this.reset}
                ></GameOver>
                <Reset
                reset={this.reset}
                ></Reset>
            </div>
        );
    }
}

export default withRouter(GameOverContainer);