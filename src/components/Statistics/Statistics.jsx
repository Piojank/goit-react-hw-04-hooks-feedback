import PropsType from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className="Statistics">
        <span className="Statistics__value">Good: {good}</span>
        <span className="Statistics__value">Neutral: {neutral}</span>
        <span className="Statistics__value">Bad: {bad}</span>
        <span className="Statistics__value">Total: {total}</span>
        <span className="Statistics__value">
        Positive feedback: {positivePercentage}%
        </span>
    </div>
);

Statistics.propTypes = {
    good: PropsType.number.isRequired,
    neutral: PropsType.number.isRequired,
    bad: PropsType.number.isRequired,
    total: PropsType.number.isRequired,
    positivePercentage: PropsType.number.isRequired,
    };

export default Statistics;