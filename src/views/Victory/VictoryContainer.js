import LocalStorage from './../../helpers/LocalStorage';
import React, { Component } from 'react';
import Victory from './Victory';
import { withRouter } from 'react-router-dom';

class VictoryContainer extends Component {
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
            <Victory
                resetCallback={this.reset}
            ></Victory>
        );
    }
}

export default withRouter(VictoryContainer);