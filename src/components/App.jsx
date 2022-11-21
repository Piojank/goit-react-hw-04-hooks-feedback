import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import './App.css';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = event => {
        const state = event.target.name;
        switch (state) {
        case 'good':
            setGood(good + 1);
            break;
        case 'neutral':
            setNeutral(neutral + 1);
            break;
        case 'bad':
            setBad(bad + 1);
            break;
        default:
            alert('Error');
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        if (countTotalFeedback())
        return Math.floor((good * 100) / countTotalFeedback());
        return 0;
    };

    return (
        <div className="Feedback">
        <Section title="Please leave feedback">
            <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
            />
        </Section>
        <Section title="Statistics">
            {countTotalFeedback() ? (
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />
            ) : (
            <Notification message="There is no feedback" />
            )}
        </Section>
        </div>
    );
};