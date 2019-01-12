import React from 'react';
import PropTypes from 'prop-types';

const Victory = ({resetCallback}) => (
    <section>
        <h1>Winner winner trivia killer !!</h1>
    </section>
);

Victory.PropTypes = {
    resetCallback: PropTypes.func.isRequired
}

export default Victory;