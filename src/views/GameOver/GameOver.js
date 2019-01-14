import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({resetCallback}) => (
    <section className="gameover-section">
        <h1 className="gameover-title">Loser</h1>
    </section>
);

GameOver.PropTypes = {
    resetCallback: PropTypes.func.isRequired
}

export default GameOver;