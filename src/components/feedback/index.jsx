const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div onClick={onLeaveFeedback}>
      {options.map(option => (
        <button type="button" data-rate={option} key={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
