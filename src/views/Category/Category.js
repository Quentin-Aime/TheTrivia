import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, question, answer, submitCallback, changeAnswerValue, resetCallback }) => (
    <section className="category-section">
        <h1 className="category-title">{categoryName}</h1>
        <h3 className="category-question">{question.question}</h3>
        <hr className="category-hr"></hr>
        <form onSubmit={submitCallback}>
            <input className="category-input" placeholder="answer" name="answer" value={answer} onChange={changeAnswerValue}></input>
            <button className="category-submit">Submit</button>
        </form>
    </section>
);

Category.propTypes = {
    categoryName: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    answer: PropTypes.string.isRequired,
    submitCallback: PropTypes.func.isRequired,
    changeAnswerValue: PropTypes.func.isRequired,
    resetCallback: PropTypes.func.isRequired
}

export default Category;