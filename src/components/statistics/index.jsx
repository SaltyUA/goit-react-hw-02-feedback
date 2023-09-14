import StatisticsList from './Statistic.styled';
import StatisticText from './StatisticText.styled';

const Statistics = ({ good, neutral, bad, total, positivePercetage }) => {
  return (
    <div>
      <StatisticsList>
        <li>
          <StatisticText>Good: {good}</StatisticText>
        </li>
        <li>
          <StatisticText>Neutral: {neutral}</StatisticText>
        </li>
        <li>
          <StatisticText>Bad: {bad}</StatisticText>
        </li>
        <li>
          <StatisticText>Total: {total}</StatisticText>
        </li>
        <li>
          <StatisticText>Positive feedback: {positivePercetage}%</StatisticText>
        </li>
      </StatisticsList>
    </div>
  );
};

export default Statistics;
