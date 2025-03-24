import { PageLayout } from '../components/PageLayout/PageLayout';
import { Welcome } from '../components/Welcome/Welcome';
import styled from '@emotion/styled';

import { PagePaper } from '../components/PageLayout/PageLayout.styled';
import { Wedding } from './sections/Wedding';
import { Party } from './sections/Party';
import { Program } from './sections/Program';
import { Photos } from './sections/Photos';
import { Directions } from './sections/Directions';

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Start = () => {
  return (
    <StartWrapper>
      <Welcome />
      <PageLayout>
        <PagePaper>
          <Wedding />
          <Party />
          <Program />
          <Photos />
          <Directions />
        </PagePaper>
      </PageLayout>
    </StartWrapper>
  );
};
