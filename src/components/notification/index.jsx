import StatisticText from 'components/statistics/StatisticText.styled';

const Notification = ({ message }) => {
  return (
    <div>
      <StatisticText>{message}</StatisticText>
    </div>
  );
};

export default Notification;
