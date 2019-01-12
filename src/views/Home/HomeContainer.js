import React, {Component} from 'react';
import Home from './Home';
import LocalStorage from './../../helpers/LocalStorage';


class HomeContainer extends Component {
    state = {
        categories: [],
        isLoading: true,
    }
    componentDidMount() {
        if (LocalStorage.getItem('setup') !== 'completed') {
            LocalStorage.initialize();
        }
        fetch('http://jservice.io/api/categories?count=30').then(response => {
            response.json().then(categories => {
                console.debug(categories);
                this.setState({
                    categories: categories,
                    isLoading: false,
                });
            });
        });
    }
    render () {
        return (
            <Home
                categories={this.state.categories}
                isLoading={this.state.isLoading}></Home>
        );  
    }
}



export default HomeContainer;