import { IconButton } from '@mui/material';
import {
  WelcomeBody,
  WelcomeInnerWrapper,
  WelcomeOuterWrapper,
  WelcomeTitle,
} from './Welcome.styled';
import SouthIcon from '@mui/icons-material/South';

export const WelcomeEnglish = () => {
  return (
    <WelcomeOuterWrapper>
      <WelcomeInnerWrapper>
        <div>
          <WelcomeTitle fontFamily={'Charm'} variant="h3" color="secondary">
            {'Henke & Lottens wedding'}
          </WelcomeTitle>
          <WelcomeTitle fontFamily={'Charm'} variant="h4" color="secondary">
            {'Lovis naming ceremony'}
          </WelcomeTitle>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <WelcomeBody variant="h6">
            We're getting married this summer and Lovis is getting her name!
          </WelcomeBody>
          <WelcomeBody variant="h6">
            Instead of a letter invitation, we have built a website where you
            can find more information.
          </WelcomeBody>
          <WelcomeBody variant="h6">
            We hope you will celebrate the day with us!
          </WelcomeBody>
          <WelcomeBody variant="h6">
            Please RSVP as soon as possible, but no later than May 18 by filling
            in the party registration form.
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
