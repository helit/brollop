import styled from '@emotion/styled';
import { colors, Typography } from '@mui/material';
import { ReactNode } from 'react';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 0;
`;

const SectionDivider = styled.div`
  border-bottom: 3px dotted ${colors.blue[500]};
  margin: 16px 0;
`;

interface SectionProps {
  children: ReactNode;
  title?: string;
  sectionId?: string;
}

export const Section = ({ children, title, sectionId }: SectionProps) => {
  return (
    <>
      <SectionWrapper id={sectionId}>
        {title && (
          <Typography variant="h4" fontFamily={'Charm'} color="primary">
            {title}
          </Typography>
        )}
        {children}
      </SectionWrapper>
      <SectionDivider />
    </>
  );
};

export const SubSection = ({ children }: { children: ReactNode }) => {
  return <SubSectionWrapper>{children}</SubSectionWrapper>;
};
