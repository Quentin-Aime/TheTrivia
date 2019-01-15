import LocalStorage from './../../helpers/LocalStorage';
import React, { Component } from 'react';
import Victory from './Victory';
import { withRouter } from 'react-router-dom';
import Reset from '../../components/Reset/Reset';
import Score from '../../components/Score/Score';
import Life from '../../components/Life/Life';


class VictoryContainer extends Component {
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
                <Score
                    score={localStorage.getItem('score')}
                ></Score>
                <Life
                    life={localStorage.getItem('life')}                
                ></Life>                
                <Victory
                    resetCallback={this.reset}
                ></Victory>
                <Reset
                reset={this.reset}
                ></Reset>
            </div>
        );
    }
}

export default withRouter(VictoryContainer);