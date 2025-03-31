import styled from "@emotion/styled";
import { colors as muiColors } from "@mui/material";
import { Typography } from "@mui/material";
import { breakpoints } from "../../consts/breakpoints";

export const WelcomeOuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: calc(100vh - 80px);
    height: 100vh;
`;

export const WelcomeInnerWrapper = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const WelcomeDivider = styled.div`
    background-color: ${muiColors.amber[600]};
    width: 100%;
    height: 3px;
    box-shadow: ${muiColors.grey[800]} 2px 3px 1px;
    border-radius: 30%;
`;

export const WelcomeTitle = styled(Typography)`
    text-shadow: ${muiColors.grey[800]} 2px 3px 1px;

    @media (max-width: ${breakpoints.tablet}px) {
        font-size: 3rem;
    }
`;

export const WelcomeBody = styled(Typography)`
    text-shadow: ${muiColors.grey[800]} 2px 2px 1px;
    

    @media (max-width: ${breakpoints.tablet}px) {
        font-size: 1.2rem;
    }
`;