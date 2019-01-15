import React, { Component } from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';
import Api from './../../helpers/Api';
// import Interaction from './../../helpers/Interaction';
import LocalStorage from './../../helpers/LocalStorage';
import Score from '../../components/Score/Score';
import Life from '../../components/Life/Life';
import Reset from '../../components/Reset/Reset';

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
        this.reset = this.reset.bind(this);
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
            let questionsDone = LocalStorage.getItem(this.props.match.params.name);
            if (questionsDone) {
                questionsReceived = questionsReceived.filter(question => {
                    return !questionsDone.includes(question.id)
                });
            }
            if (questionsReceived.length === 0) {
                this.props.history.push('/');
            }
            return questionsReceived;
        }).then(questions => {
            let random = Math.random() * questions.length
            let questionNumber = Math.floor(random);
            this.setState({
                question: questions[questionNumber]
            });

            console.warn(`!!! For tester's time !!!
the answer is : ${this.state.question.answer}`)
        })
    }
    submitAnswer(event) {
        event.preventDefault();
        if (this.state.answer === this.state.question.answer) {
            LocalStorage.saveItem(this.props.match.params.name, this.state.question.id);
            LocalStorage.incrementScore();
            this.setState({
                answer: ''
            })

            if (LocalStorage.getItem('score') >= 10) {
                this.props.history.push('/victory');
            }
            else {
                this.generateQuestion();
            }
        }
        else {
            LocalStorage.decrementLife();
            if (LocalStorage.getItem('life') === 0) {
                this.props.history.push('/gameover')
            }
        }
    }
    reset() {
        LocalStorage.initialize();
        this.props.history.push('/');
    }
    changeAnswerValue(event) {
        this.setState({
            answer: event.target.value
        })
    }
    render () {
        return (
            <div className="category-wrapper">
                <Score
                    score={localStorage.getItem('score')}
                ></Score>
                <Life
                    life={localStorage.getItem('life')}                
                ></Life>
                <Category
                    categoryName={this.state.name}
                    question={this.state.question}
                    answer={this.state.answer}
                    submitCallback={this.submitAnswer}
                    changeAnswerValue={this.changeAnswerValue}
                    resetCallback={this.reset}
                ></Category>
                <Reset
                    reset={this.reset}
                ></Reset>
            </div>
        );
    }
}

export default withRouter(CategoryContainer);