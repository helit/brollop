import { IconButton } from '@mui/material';
import {
  WelcomeBody,
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
          <WelcomeTitle fontFamily={'Charm'} variant="h3" color="secondary">
            {'Henke & Lottens bröllop'}
          </WelcomeTitle>
          <WelcomeTitle fontFamily={'Charm'} variant="h4" color="secondary">
            {'Lovis namngivning'}
          </WelcomeTitle>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <WelcomeBody variant="h6">
            Vi ska gifta oss i sommar och Lovis skall få sitt namn!
          </WelcomeBody>
          <WelcomeBody variant="h6">
            Istället för en brevinbjudan har vi byggt en hemsida där du som
            inbjuden kan hitta mer information.
          </WelcomeBody>
          <WelcomeBody variant="h6">
            Vi hoppas att du vill fira dagen med oss!
          </WelcomeBody>
          <WelcomeBody variant="h6">
            OSA gärna så snart som möjligt, men senast 18 maj genom att fylla i
            festanmälan.
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
