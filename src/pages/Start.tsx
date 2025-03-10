import { PageLayout } from '../components/PageLayout/PageLayout'
import { Welcome } from '../components/Welcome/Welcome'
import { Section } from '../components/Section/Section'
import styled from '@emotion/styled'
import { colors, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useTabs } from '../hooks/useTabs'

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Start = () => {
  const { setActiveTab } = useTabs()

  return (
    <StartWrapper>
      <Welcome />
      <PageLayout>
        <Section title="Vigseln">
          <img
            src={'./src/assets/lycke-ka-akvarell.png'}
            style={{ width: '100%' }}
          />
          <Typography variant={'body1'}>
            Vigseln kommer äga rum den 19 juli i Lycke Kyrka kl xx:xx...{' '}
            <Link
              to={'/anmalan'}
              onClick={() => setActiveTab(1)}
              style={{ color: colors.amber[700] }}
            >
              anmäl dig och/eller din familj här.
            </Link>
          </Typography>
        </Section>
        <Section title="Festen">
          <Typography variant={'body1'}>Fest hemma hos oss...</Typography>
        </Section>
        <Section title="Boende">
          <Typography variant={'body1'}>Var skall jag bo?</Typography>
        </Section>
        <Section title="Program">
          <Typography variant={'body1'}>
            Program och bidrag till festen. Vill du hålla en punkt, kontakta
            toastmaster. Vi vill gärna ha massa skoj.
          </Typography>
        </Section>
        <Section title="Kan jag hjälpa till?">
          <Typography variant={'body1'}>
            Vi vill ha hjälp med saker, roliga idéer, hör av dig om du vill
            bidra.
          </Typography>
        </Section>
        <Section title="Ladda upp bilder">
          <Typography variant={'body1'}>
            Här kan du ladda upp bilder du tagit.
          </Typography>
        </Section>
        <Section title="Klädsel">
          <Typography variant={'body1'}>Ta på dig nåt fint.</Typography>
        </Section>
        <Section title="Hitta">
          <Typography variant={'body1'}>
            Hitta till Kyrka / Fest och parkeringar...
          </Typography>
        </Section>
      </PageLayout>
    </StartWrapper>
  )
}
