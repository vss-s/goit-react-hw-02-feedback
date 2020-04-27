import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button
          key={item.id}
          name={item.name}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
