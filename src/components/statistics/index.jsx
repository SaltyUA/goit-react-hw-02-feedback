const Statistics = ({ good, neutral, bad, total, positivePercetage }) => {
  return (
    <div>
      <p>Statistic</p>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercetage}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
