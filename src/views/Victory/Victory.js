import React from 'react';
import PropTypes from 'prop-types';

const Victory = ({resetCallback}) => (
    <section className="victory-section">
        <h1 className="victory-title">Winner winner trivia killer !!</h1>
    </section>
);

Victory.propTypes = {
    resetCallback: PropTypes.func.isRequired
}

export default Victory;