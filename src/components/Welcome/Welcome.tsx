import { IconButton } from '@mui/material';
import {
  WelcomeBody,
  WelcomeDivider,
  WelcomeInnerWrapper,
  WelcomeOuterWrapper,
  WelcomeTitle,
} from './Welcome.styled';
import SouthIcon from '@mui/icons-material/South';

export const Welcome = () => {
  return (
    <WelcomeOuterWrapper>
      <WelcomeInnerWrapper>
        <div>
          <WelcomeTitle fontFamily={'Charm'} variant="h2" color="secondary">
            {'Henke & Lottens bröllop'}
          </WelcomeTitle>
          <WelcomeDivider />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <WelcomeBody variant="h6">Vi ska gifta oss i sommar!</WelcomeBody>
          <WelcomeBody variant="h6">
            Istället för en brevinbjudan har vi byggt en hemsida där du som
            inbjuden kan hitta mer information.
          </WelcomeBody>
          <WelcomeBody variant="h6">
            Vi hoppas att du vill fira dagen med oss!
          </WelcomeBody>
          <WelcomeBody variant="h6">
            OSA gärna så snart som möjligt, men senast 18 maj genom att fylla i
            anmälan.
          </WelcomeBody>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton color="secondary" size="large">
            <SouthIcon fontSize="inherit" />
          </IconButton>
        </div>
      </WelcomeInnerWrapper>
    </WelcomeOuterWrapper>
  );
};
