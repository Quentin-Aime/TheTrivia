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
        this.generateQuestion();
    }
    generateQuestion() {
        Api.getQuestionsByCategoryId(this.props.match.params.name).then(resp => {
            let questionsReceived = resp;
            console.debug(questionsReceived);
            let questionsDone = LocalStorage.getItem(this.props.match.params.name);
            if (questionsDone) {
                console.debug(questionsDone);
                questionsReceived = questionsReceived.filter(question => {
                    return !questionsDone.includes(question.id)
                });
            }
            if (questionsReceived.length === 0) {
                this.props.history.push('/');
            }
            console.debug(questionsReceived);
            return questionsReceived;
        }).then(questions => {
            console.debug(questions.length);
            let random = Math.random() * questions.length
            let questionNumber = Math.floor(random);
            console.debug(questionNumber);
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
            this.setState({
                answer: ''
            })

            this.generateQuestion();
        }
        else {
            LocalStorage.decrementLife();
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