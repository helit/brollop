import { Menu } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { ContentWrapper, StyledAppBar } from "./Header.styled";
import { useDrawer } from "../../hooks/useDrawer";

export const Header = () => {
  const { open } = useDrawer();

  return (
    <StyledAppBar>
        <ContentWrapper>
            <IconButton onClick={open}>
                <Menu />
            </IconButton>
            <Typography fontFamily={'Charm'} variant="h6">{"Henke & Lottens bröllop"}</Typography>
        </ContentWrapper>
    </StyledAppBar>
  );
};
