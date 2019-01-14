import React from 'react';
import PropTypes from 'prop-types';

const Life = ({life}) => (
    <div>
        <p>Life: {life}</p>
    </div>
);

Life.propTypes = {
    life: PropTypes.string.isRequired
}

export default Life;