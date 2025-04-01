import styled from "@emotion/styled";
import { breakpoints } from "../../consts/breakpoints";

export const Background = styled.div`
    background-image: url('./assets/background-3.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;

export const MainLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 16px;

    @media (max-width: ${breakpoints.tablet}px) {
        padding: 36px 16px;
    }
`;