import LocalStorage from './../../helpers/LocalStorage';
import React, { Component } from 'react';
import Victory from './Victory';
import { withRouter } from 'react-router-dom';
import Reset from '../../components/Reset/Reset';

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