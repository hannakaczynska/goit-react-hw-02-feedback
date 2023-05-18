import React from 'react'
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

const colors = {
  good: css.buttonGood,
  neutral: css.buttonNeutral,
  bad: css.buttonBad,
};

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (<>
      <h3 className={css.feedbackTitle}>Please leave feedback</h3>
      <div className={css.buttonList}>
          {options.map(option => {
              return (
        <button
            className={colors[option]}          
            key={option}         
            name={option}
            type="button"
            value={ option }
            onClick={onLeaveFeedback}>
            { option }
        </button>) })}
     </div>
    </>
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions

