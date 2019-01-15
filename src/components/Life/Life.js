import React from 'react';
import PropTypes from 'prop-types';

const Life = ({life}) => (
    <div className="life-section">
        <p>Life: {life}</p>
    </div>
);

Life.propTypes = {
    life: PropTypes.string.isRequired
}

export default Life;