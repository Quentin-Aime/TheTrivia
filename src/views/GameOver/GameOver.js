import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({resetCallback}) => (
    <section>
        <h1>Loser</h1>
    </section>
);

GameOver.PropTypes = {
    resetCallback: PropTypes.func.isRequired
}

export default GameOver;