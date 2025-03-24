import styled from "@emotion/styled";
import { colors } from "../../consts/colors";
import { Typography } from "@mui/material";
import { breakpoints } from "../../consts/breakpoints";

export const WelcomeOuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
`;

export const WelcomeInnerWrapper = styled.div`
    max-width: 510px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const WelcomeDivider = styled.div`
    background-color: white;
    width: 100%;
    height: 3px;
    box-shadow: ${colors.black} 1px 0px 10px;
    border-radius: 30%;
`;

export const WelcomeTitle = styled(Typography)`
    text-shadow: ${colors.black} 1px 0px 10px;

    @media (max-width: ${breakpoints.tablet}px) {
        font-size: 3rem;
    }
`;

export const WelcomeBody = styled(Typography)`
    // text-shadow: ${colors.black} 1px 0px 10px;
    text-shadow: ${colors.black} 2px 2px 1px;
    

    @media (max-width: ${breakpoints.tablet}px) {
        font-size: 1.2rem;
    }
`;