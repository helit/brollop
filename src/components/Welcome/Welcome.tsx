import { Typography } from "@mui/material";
import { colors } from "../../consts/colors";

export const Welcome = () => {
  return (
    <>
      <Typography style={{textShadow: `${colors.black} 1px 0px 10px`}} fontFamily={"Charm"} variant="h1">
        {"Välkommen"}
      </Typography>
      <Typography style={{textShadow: `${colors.black} 1px 0px 10px`}} fontFamily={"Charm"} variant="h3">
        {"till Henke & Lottens bröllop"}
      </Typography>
      <div style={{backgroundColor: 'white', width: '100%', height: '3px', boxShadow: `${colors.black} 1px 0px 10px`, borderRadius: '30%'}} />
    </>
  );
};
