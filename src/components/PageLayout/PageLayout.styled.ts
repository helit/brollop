import styled from '@emotion/styled'
import { Card } from '@mui/material';

export const PageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PagePaper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: rgba(246, 238, 227, 0.9);
  color: #242424;
  padding: 20px;
`;