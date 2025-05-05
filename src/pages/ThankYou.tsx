import { Button, Typography } from '@mui/material';
import { PagePaper } from '../components/PageLayout/PageLayout.styled';
import { useTabs } from '../hooks/useTabs';
import { SubSection } from '../components/Section/Section';

export const ThankYou = () => {
  const { setActiveTab, currentLanguage } = useTabs();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {currentLanguage === 'en' ? (
        <PagePaper>
          <Typography variant={'h4'} fontFamily={'Charm'} color="primary">
            Thank you for your registration!
          </Typography>
          <SubSection>
            <Typography variant={'body1'}>
              We look forward to celebrating the day together!
            </Typography>
            <Typography variant={'body1'}>
              If you have any questions, please contact our wedding director
              Matilda. Contact details can be found on the home page.
            </Typography>
          </SubSection>
          <Button
            variant="text"
            color="primary"
            onClick={() => setActiveTab(0)}
          >
            Go back
          </Button>
        </PagePaper>
      ) : (
        <PagePaper>
          <Typography variant={'h4'} fontFamily={'Charm'} color="primary">
            Tack för din anmälan!
          </Typography>
          <SubSection>
            <Typography variant={'body1'}>
              Vi ser fram emot att fira dagen tillsammans!
            </Typography>
            <Typography variant={'body1'}>
              Om du har några frågor, kontakta vår bröllopsregissör Matilda.
              Kontaktuppgifter finns på startsidan.
            </Typography>
          </SubSection>
          <Button
            variant="text"
            color="primary"
            onClick={() => setActiveTab(0)}
          >
            Gå tillbaka
          </Button>
        </PagePaper>
      )}
    </div>
  );
};
