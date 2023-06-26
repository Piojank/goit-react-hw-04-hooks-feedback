import { useState } from "react";
import s from './App.module.css';

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

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
                alert('Error!');
        };
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        if (countTotalFeedback())
        return Math.round((good / countTotalFeedback()) * 100);
        return 0;
    };

    return (
        <div className={s.container}>
            <Section title="Please leave feedback">
                <FeedbackOptions 
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {this.countTotalFeedback() > 0 ? (
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

