import { IconButton, Typography } from '@mui/material'
import { colors } from '../../consts/colors'
import { WelcomeInnerWrapper, WelcomeOuterWrapper } from './Welcome.styled'
import SouthIcon from '@mui/icons-material/South'

export const Welcome = () => {
  return (
    <WelcomeOuterWrapper>
      <WelcomeInnerWrapper>
        <div>
          <Typography
            style={{ textShadow: `${colors.black} 1px 0px 10px` }}
            fontFamily={'Charm'}
            variant="h1"
          >
            {'Henke & Lottens bröllop'}
          </Typography>
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '3px',
              boxShadow: `${colors.black} 1px 0px 10px`,
              borderRadius: '30%',
            }}
          />
        </div>
        <div>
          <Typography
            variant="h5"
            style={{ textShadow: `${colors.black} 1px 0px 10px` }}
          >
            Välkommen till vårat bröllop den 19 juli i Lycke Kyrka. På denna
            hemsida hittar ni all information samt möjlighet att anmäla er till
            bröllopet. Scrolla ner för mer information eller gå direkt till
            anmälan i menyn högst upp på sidan.
          </Typography>
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
