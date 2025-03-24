import { ApplicationForm } from '../components/ApplicationForm/ApplicationForm';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { PagePaper } from '../components/PageLayout/PageLayout.styled';
export const Application = () => {
  return (
    <div>
      <PageLayout>
        <PagePaper title="Anmälan">
          <ApplicationForm />
        </PagePaper>
      </PageLayout>
    </div>
  );
};
