import { ApplicationForm } from '../components/ApplicationForm/ApplicationForm';
import { ApplicationFormEnglish } from '../components/ApplicationForm/ApplicationFormEnglish';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { PagePaper } from '../components/PageLayout/PageLayout.styled';
import { useTabs } from '../hooks/useTabs';
export const Application = () => {
  const { currentLanguage } = useTabs();

  return (
    <PageLayout>
      <PagePaper title="Anmälan">
        {currentLanguage === 'en' ? (
          <ApplicationFormEnglish />
        ) : (
          <ApplicationForm />
        )}
      </PagePaper>
    </PageLayout>
  );
};
