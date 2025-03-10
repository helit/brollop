import { ApplicationForm } from '../components/ApplicationForm/ApplicationForm'
import { PageLayout } from '../components/PageLayout/PageLayout'
import { Section } from '../components/Section/Section'

export const Application = () => {
  return (
    <div>
      <PageLayout>
        <Section title="Anmälan">
          <ApplicationForm />
        </Section>
      </PageLayout>
    </div>
  )
}
