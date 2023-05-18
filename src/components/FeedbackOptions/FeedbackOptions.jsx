import React from 'react'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (<>
      <h3>Please leave feedback</h3>
      <div>
          {options.map(option => {
              console.log(option)
              return (
        <button
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

export default FeedbackOptions




// import { Component } from "react";

// class Feedback extends Component {
// static defaultProps = {
//     step: 1,
// };

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

// handleClick = e => {
//     const { name, value } = e.target;
//     const { step } = this.props;
//     this.setState({
//         [name]: +value + step  
//     })  
//     }

// countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total
//     }

// countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = ((good * 100) / total).toFixed(0);
//     return positiveFeedback
// }

    
//     render() {
//     const { good, neutral, bad } = this.state
//         return <>
//             <h3>Please leave feedback</h3>
//             <div>
//                 <button
//                     name="good"
//                     type="button"
//                     value={good}
//                     onClick={this.handleClick}>
//                     Good
//                 </button>
//                 <button
//                     name="neutral"
//                     type="button"
//                     value={neutral}
//                     onClick={this.handleClick}>
//                     Neutral
//                 </button>
//                 <button
//                     name="bad"
//                     type="button"
//                     value={bad}
//                     onClick={this.handleClick}>
//                     Bad
//                 </button>
//             </div>
//             <h3>Statistics</h3>
//             <ul>
//                 <li>Good: { good }</li>
//                 <li>Neutral: { neutral }</li>
//                 <li>Bad: { bad }</li>
//                 <li>Total: { this.countTotalFeedback() }</li>
//                 <li>Positive feedback: { this.countPositiveFeedbackPercentage()}%</li>
//             </ul>
//         </>
//     }

// }

// export default Feedback;