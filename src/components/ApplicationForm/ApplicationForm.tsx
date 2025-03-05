import { Button, TextField, Typography } from "@mui/material";
import { FormWrapper, StyledCard } from "./ApplicationForm.styled";

export const ApplicationForm = () => {
  return (
    <StyledCard>
      <FormWrapper>
        <Typography variant="h3" fontFamily={'Charm'}>{"Anmälan"}</Typography>
        <Typography variant="body2">
          {"Fyll i formuläret nedan för att anmäla dig till bröllopet."}
        </Typography>
        <TextField label="Förnamn" fullWidth />
        <TextField label="Efternamn" fullWidth />
        <TextField type="email" label="E-post" fullWidth />
        <TextField type="number" label="Antal vuxna" fullWidth />
        <TextField type="number" label="Antal barn" fullWidth />
        <TextField label="Matpreferens / Allergi" fullWidth />
        <TextField type="area" fullWidth />
        <Button variant="contained" type="submit">
          {"Skicka"}
        </Button>
      </FormWrapper>
    </StyledCard>
  );
};
