import React, {Component} from 'react';
import Home from './Home';
import PropTypes from 'prop-types';
import LocalStorage from './../../helpers/LocalStorage';


const Form = ({reply, replyCallback}) => (
    <input
        placeholder="Search"
        value={reply}
        onChange={replyCallback} 
    />
)
Form.propTypes = {
    reply: PropTypes.string.isRequired,
    replyCallback: PropTypes.func.isRequired 
}

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            filteredCategories: [], 
            isLoading: true,
            reply: '',            
        }
        this.handleInputChange = this.handleInputChange.bind(this); 
    }

    handleInputChange (event) {
        this.setState({           
            reply: event.target.value
        }) 
        let ctg = this.state.categories.filter(category => {
            return category.title.toLowerCase().includes(this.state.reply.toLowerCase())
        })
        if(this.state.reply === '') {
            ctg = this.state.categories
        }
        this.setState({ 
            filteredCategories: ctg 
        })
    }
                   

    componentDidMount() {
        fetch('http://jservice.io/api/categories?count=30').then(response => { 
            if (LocalStorage.getItem('setup') !== 'completed') {
                LocalStorage.initialize();
            }
            response.json().then(categories => {
                this.setState({ 
                    categories: categories,
                    isLoading: false,
                });
            });
        });
    }
    render () {
        return (
            <div>
            <Home
                categories={this.state.filteredCategories}
                isLoading={this.state.isLoading}>
                </Home>
            <Form 
                replyCallback={this.handleInputChange}
                reply={this.state.reply }               
            /> 
            </div>    
        );  
    }
}



export default HomeContainer;