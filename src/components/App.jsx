import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    const name = e.target.name;
    const { step } = this.props;
    this.setState(prevState => ({
      [name]: prevState[name] + step
    }))
}

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
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return <>
      <FeedbackOptions options={ Object.keys(this.state) } onLeaveFeedback={this.onLeaveFeedback}/>
      <Section title="Statictics">
        <Notification message="There is no feedback" />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
      </Section>
    </>
  }
};
