import { SectionContainer, SectionText } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <SectionText>{title}</SectionText>
      {children}
    </SectionContainer>
  );
};

export default Section;
