import { Typography } from "@mui/material";

export const FrontPageHeading = () => {
  return (
    <>
      <Typography style={{textShadow: 'rgb(0 0 0) 1px 0px 10px'}} fontFamily={"Charm"} variant="h1">
        {"Välkommen"}
      </Typography>
      <Typography style={{textShadow: 'rgb(0 0 0) 1px 0px 10px'}} fontFamily={"Charm"} variant="h3">
        {"till Henke & Lottens bröllop"}
      </Typography>
      <div style={{backgroundColor: 'white', width: '100%', height: '3px', boxShadow: 'rgb(0 0 0) 1px 0px 10px', borderRadius: '30%'}} />
    </>
  );
};
