import styled from '@emotion/styled'
import { Card } from '@mui/material';
import { breakpoints } from '../../consts/breakpoints';

export const PageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (max-width: ${breakpoints.tablet}px) {
    gap: 16px;
  }
`

export const PagePaper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: rgba(246, 238, 227, 0.9);
  color: #242424;
  padding: 26px;


  @media (max-width: ${breakpoints.tablet}px) {
    padding: 16px;
    gap: 16px;
  }
`;