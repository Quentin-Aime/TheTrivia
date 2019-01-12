
import React, { Component } from 'react';
import Victory from './Victory';
import { withRouter } from 'react-router-dom';

class VictoryContainer extends Component {
    componentDidMount() {
        
    }
    render () {
        return (
            <Victory></Victory>
        );
    }
}

export default withRouter(VictoryContainer);