import { Box, Tab, Tabs } from '@mui/material';
import { ContentWrapper, StyledAppBar } from './Header.styled';
import { useTabs } from '../../hooks/useTabs';
import { tabs } from '../../consts/tabs';
export const Header = () => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <StyledAppBar>
      <ContentWrapper>
        <Box
          style={{
            display: 'flex',
            maxWidth: '900px',
            width: '100%',
          }}
        >
          <Tabs value={activeTab}>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                onClick={() => setActiveTab(tab.index)}
              />
            ))}
          </Tabs>
        </Box>
      </ContentWrapper>
    </StyledAppBar>
  );
};
