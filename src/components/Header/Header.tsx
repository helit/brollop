import { Box, Tab, Tabs, Typography } from '@mui/material'
import { ContentWrapper, StyledAppBar } from './Header.styled'
import { useTabs } from '../../hooks/useTabs'
import { tabs } from '../../consts/tabs'
export const Header = () => {
  const { activeTab, setActiveTab } = useTabs()

  const handleChange = (newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <StyledAppBar>
      <ContentWrapper>
        <Typography fontFamily={'Charm'} variant="h6">
          {'Henke & Lottens bröllop'}
        </Typography>
        <Box>
          <Tabs value={activeTab} onChange={() => handleChange}>
            {tabs.map((tab) => (
              <Tab key={tab.label} label={tab.label} />
            ))}
          </Tabs>
        </Box>
      </ContentWrapper>
    </StyledAppBar>
  )
}
