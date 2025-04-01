import styled from "@emotion/styled";
import { colors as muiColors } from "@mui/material";
import { Typography } from "@mui/material";
import { breakpoints } from "../../consts/breakpoints";

export const WelcomeOuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (max-width: ${breakpoints.tablet}px) {
        justify-content: unset;
    }
`;

export const WelcomeInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 24px;
`;

export const WelcomeTitle = styled(Typography)`
    text-shadow: ${muiColors.grey[800]} 1px 1px 1px;

    @media (max-width: ${breakpoints.tablet}px) {
        font-size: 2.3rem;
    }
`;

export const WelcomeBody = styled(Typography)`
    text-shadow: ${muiColors.grey[800]} 1px 1px 1px;
    

    @media (max-width: ${breakpoints.tablet}px) {
        font-size: 1.2rem;
    }
`;