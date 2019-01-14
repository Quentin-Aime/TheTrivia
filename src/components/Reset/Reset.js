import React from 'react';
import PropTypes from 'prop-types';


const Reset = ({reset}) => (
    <div>
        <button onClick={reset}>Reset</button>
    </div>
);

Reset.propTypes = {
    reset: PropTypes.func.isRequired, 
}

export default Reset;