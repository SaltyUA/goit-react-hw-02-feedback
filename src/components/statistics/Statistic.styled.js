const { default: styled } = require('styled-components');

const StatisticsList = styled('ul')(() => {
  return {
    listStyle: `none`,
    display: 'flex',
    flexDirection: `column`,
    justifyContent: 'center',
    alignItems: `center`,
    gap: `1rem`,
    marginTop: `1rem`,
  };
});

export default StatisticsList;
