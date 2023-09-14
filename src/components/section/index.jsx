import SectionContainer from './SectionContainer.styled';
import SectionText from './SectionText.styled';

const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <SectionText>{title}</SectionText>
      {children}
    </SectionContainer>
  );
};

export default Section;
