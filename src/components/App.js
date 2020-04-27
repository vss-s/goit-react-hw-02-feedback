import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const feedBackOptions = [
  { id: 1, name: 'good' },
  { id: 2, name: 'neutral' },
  { id: 3, name: 'bad' },
];

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedBack = e =>
    this.setState({
      [e.target.name]: this.state[e.target.name] + 1,
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={feedBackOptions}
            onLeaveFeedback={this.handleFeedBack}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
