import { Button, TextField, Typography } from '@mui/material'
import { FormWrapper } from './ApplicationForm.styled'

export const ApplicationForm = () => {
  return (
    <FormWrapper>
      <Typography variant="body1">
        {
          'Fyll i formuläret nedan för att anmäla dig till bröllopet. Anmäl dig senast xx.'
        }
      </Typography>
      <Typography variant="body1">
        {
          'O.B.S. Om du kommer med partner/barn behöver du bara fylla i en anmälan och skriva i antal vuxna & barn (under 12 år). Skriv gärna alla gästers namn i meddelandet på slutet.'
        }
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
        <TextField label="Förnamn" fullWidth variant="filled" size={'small'} />
        <TextField
          label="Efternamn"
          fullWidth
          variant="filled"
          size={'small'}
        />
      </div>
      <TextField
        type="email"
        label="E-post"
        fullWidth
        variant="filled"
        size={'small'}
      />
      <TextField
        type="number"
        label="Antal vuxna"
        fullWidth
        variant="filled"
        size={'small'}
        helperText="Du själv plus eventuell partner och barn 12 år eller äldre."
      />
      <TextField
        type="number"
        label="Antal barn"
        fullWidth
        variant="filled"
        size={'small'}
        helperText="Antal barn under 12 år, äldre barn räknar vi som vuxna"
      />
      <TextField
        label="Matpreferens / Allergi"
        fullWidth
        variant="filled"
        size={'small'}
        helperText="t.ex. vegetarisk, vegansk, glutenfri, laktosfri, nötallergi etc."
      />
      <TextField
        fullWidth
        label="Meddelande"
        variant="filled"
        multiline
        rows={4}
        size={'small'}
        helperText="Övrig information bra att veta samt namn på gäster utöver dig själv som du anmäler."
      />
      <Button variant="contained" type="submit">
        {'Skicka in anmälan'}
      </Button>
    </FormWrapper>
  )
}
