import styled from "@emotion/styled";
import { breakpoints } from "../../consts/breakpoints";

export const Background = styled.img`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
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