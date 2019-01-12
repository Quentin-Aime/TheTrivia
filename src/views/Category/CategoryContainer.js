import React, { Component } from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';
import Api from './../../helpers/Api';
// import Interaction from './../../helpers/Interaction';
import LocalStorage from './../../helpers/LocalStorage';

class CategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNb: 20,
            name: '',
            question: {},
            answer: ''
        }
        this.changeAnswerValue = this.changeAnswerValue.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }
    componentDidMount() {
        Api.getCategoryName(this.props.match.params.name).then(resp => {
            this.setState({
                name: resp
            });
        })
        Api.getQuestionsByCategoryId(this.props.match.params.name).then(resp => {
            let questionsReceived = resp;
            let questionsDone = LocalStorage.getItem(this.props.match.params.name);
            if (questionsDone) {
                questionsReceived.filter(question => {
                    return !questionsDone.includes(question.id)
                });
            }
            return questionsReceived;
        }).then(questions => {
            let questionNumber = Math.round(Math.random() * questions.length);
            this.setState({
                question: questions[questionNumber]
            });
            console.warn(`!!! For tester's time !!!
the answer is : ${this.state.question.answer}`)
        })
    }
    submitAnswer(event) {
        event.preventDefault();
        console.debug(event);
        console.debug('submitted');
        if (this.state.answer === this.state.question.answer) {
            LocalStorage.saveItem(this.props.match.params.name, this.state.question.id);
            LocalStorage.incrementScore();
        }
        else {
            LocalStorage.loseLife();
            if (LocalStorage.getItem('life') === 0) {
                this.props.history.push('/gameover')
            }
        }
    }
    changeAnswerValue(event) {
        this.setState({
            answer: event.target.value
        })
    }
    render () {
        return (
            <Category
                categoryName={this.state.name}
                question={this.state.question}
                answer={this.state.answer}
                submitCallback={this.submitAnswer}
                changeAnswerValue={this.changeAnswerValue}
            ></Category>
        );
    }
}

export default withRouter(CategoryContainer);