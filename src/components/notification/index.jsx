import { StatisticText } from '../statistics/Statistic.styled';

const Notification = ({ message }) => {
  return (
    <div>
      <StatisticText>{message}</StatisticText>
    </div>
  );
};

export default Notification;
