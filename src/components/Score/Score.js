import React from 'react';
import PropTypes from 'prop-types';

const Score = ({score}) => (
    <div>
        <p>Score: {score}</p>
    </div>
);

Score.propTypes = {
    score: PropTypes.string.isRequired
}

export default Score;