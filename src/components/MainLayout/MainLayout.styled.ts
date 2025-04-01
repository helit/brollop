import styled from "@emotion/styled";
import { breakpoints } from "../../consts/breakpoints";

export const Background = styled.div`
    background-image: url('./assets/background-3.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
`;

export const MainLayoutOuterWrapper = styled.div`
    padding: 48px 16px;

    @media (max-width: ${breakpoints.tablet}px) {
        padding: 36px 16px;
    }
`;

export const MainLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
`;