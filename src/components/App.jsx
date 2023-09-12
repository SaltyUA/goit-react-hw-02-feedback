import FeedbackOptions from './feedback';
import Notification from './notification';
import { Component } from 'react';
import Statistics from './statistics';
import Section from './section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    posFeedback: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const rate = e.target.attributes.getNamedItem('data-rate').value;
    if (rate === 'good') {
      this.setState(() => ({
        good: this.state.good + 1,
      }));
    } else if (rate === 'neutral') {
      this.setState(() => ({
        neutral: this.state.neutral + 1,
      }));
    } else {
      this.setState(() => ({
        bad: this.state.bad + 1,
      }));
    }
    this.setState(prevState => ({
      total: this.countTotalFeedback(prevState),
    }));
    this.setState(prevState => ({
      posFeedback: this.countPositiveFeedbackPercentage(prevState),
    }));
  };

  countTotalFeedback = state => {
    const feedbackArr = [state.good, state.neutral, state.bad];
    let total = 0;
    feedbackArr.forEach(rate => {
      total += rate;
    });
    return total;
  };

  countPositiveFeedbackPercentage = state => {
    const { good, total } = state;
    const posPercent = (good / total) * 100;
    return Math.floor(posPercent);
  };

  render() {
    return (
      <>
        <Section title="Feedback Options">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercetage={this.state.posFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}
