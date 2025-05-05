import { PageLayout } from '../components/PageLayout/PageLayout';
import { Welcome } from '../components/Welcome/Welcome';
import styled from '@emotion/styled';

import { useTabs } from '../hooks/useTabs';
import { InformationEnglish } from '../components/Information/InformationEnglish';
import { Information } from '../components/Information/Information';
import { WelcomeEnglish } from '../components/Welcome/WelcomeEnglish';

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Start = () => {
  const { currentLanguage } = useTabs();

  console.log('currentLanguage', currentLanguage);
  return (
    <StartWrapper>
      <PageLayout>
        {currentLanguage === 'en' ? (
          <>
            <WelcomeEnglish />
            <InformationEnglish />
          </>
        ) : (
          <>
            <Welcome />
            <Information />
          </>
        )}
      </PageLayout>
    </StartWrapper>
  );
};
