import { IconButton } from '@mui/material'
import {
  WelcomeBody,
  WelcomeDivider,
  WelcomeInnerWrapper,
  WelcomeOuterWrapper,
  WelcomeTitle,
} from './Welcome.styled'
import SouthIcon from '@mui/icons-material/South'

export const Welcome = () => {
  return (
    <WelcomeOuterWrapper>
      <WelcomeInnerWrapper>
        <div>
          <WelcomeTitle fontFamily={'Charm'} variant="h1">
            {'Henke & Lottens bröllop'}
          </WelcomeTitle>
          <WelcomeDivider />
        </div>
        <div>
          <WelcomeBody variant="h5">
            Välkommen till vårat bröllop den 19 juli i Lycke Kyrka. På denna
            hemsida hittar ni all information samt möjlighet att anmäla er till
            bröllopet. Scrolla ner för mer information eller gå direkt till
            anmälan i menyn högst upp på sidan.
          </WelcomeBody>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton color="primary" size="large">
            <SouthIcon fontSize="inherit" />
          </IconButton>
        </div>
      </WelcomeInnerWrapper>
    </WelcomeOuterWrapper>
  )
}
