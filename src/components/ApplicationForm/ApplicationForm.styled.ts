import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { colors } from "../../consts/colors";

export const StyledCard = styled(Card)`
  padding: 16px;
  background-color: ${colors.white};
`;
  
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
