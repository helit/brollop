import { Button, Typography } from '@mui/material';
import { PagePaper } from '../components/PageLayout/PageLayout.styled';
import { useTabs } from '../hooks/useTabs';

export const ThankYou = () => {
  const { setActiveTab } = useTabs();

  return (
    <PagePaper>
      <Typography variant={'h4'} fontFamily={'Charm'}>
        Tack för din anmälan!
      </Typography>
      <Typography variant={'body1'}>
        Vi ser fram emot att fira dagen tillsammans!
      </Typography>
      <Button variant="text" onClick={() => setActiveTab(0)}>
        Tillbaka till startsidan
      </Button>
    </PagePaper>
  );
};
