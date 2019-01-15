import React from 'react';
import PropTypes from 'prop-types';


const Reset = ({reset}) => (
    <div className="reset-section">
        <button onClick={reset}>Reset</button>
    </div>
);

Reset.propTypes = {
    reset: PropTypes.func.isRequired, 
}

export default Reset;