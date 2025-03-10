import styled from '@emotion/styled'
import { AppBar } from '@mui/material'
import { colors } from '../../consts/colors'

export const StyledAppBar = styled(AppBar)`
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 16px;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: 24px;
`
