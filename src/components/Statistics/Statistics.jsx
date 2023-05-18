import { Component } from "react";

class Statistics extends Component {

countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total
    }

countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = ((good * 100) / total).toFixed(0);
    return positiveFeedback
}
    
    render() {
    return <ul>
                <li>Good: { good }</li>
                <li>Neutral: { neutral }</li>
                <li>Bad: { bad }</li>
                <li>Total: { this.countTotalFeedback() }</li>
                <li>Positive feedback: { this.countPositiveFeedbackPercentage()}%</li>
            </ul>
    }
}

export default Statistics