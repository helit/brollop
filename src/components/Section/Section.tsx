import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { ReactNode } from 'react';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionDivider = styled.div`
  border-bottom: 3px dotted #000;
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
          <Typography variant="h4" fontFamily={'Charm'}>
            {title}
          </Typography>
        )}
        {children}
      </SectionWrapper>
      <SectionDivider />
    </>
  );
};
