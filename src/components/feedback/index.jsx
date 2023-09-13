import FeedbackButton from './Button.styled';
import FeedbackContainer from './FeedbackContainer.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer onClick={onLeaveFeedback}>
      {options.map(option => (
        <FeedbackButton
          option={option}
          type="button"
          data-rate={option}
          key={option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

export default FeedbackOptions;
