import {
  Alert,
  Button,
  FormControlLabel,
  MenuItem,
  Snackbar,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { FormWrapper } from './ApplicationForm.styled';
import { SyntheticEvent, useState } from 'react';
import { useDb } from '../../hooks/useDb';
import { useNavigate } from 'react-router-dom';
import { PostType } from '../../types/postType';

type TravelOption = 'car' | 'public-transport' | 'other' | '';

export const ApplicationForm = () => {
  const navigate = useNavigate();
  const { createPost } = useDb();

  const [travelOption, setTravelOption] = useState<TravelOption>('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formState, setFormState] = useState<PostType>({
    firstName: '',
    lastName: '',
    email: '',
    adultGuests: 0,
    childGuests: 0,
    travelOption: '',
    foodPreferences: null,
    nameList: null,
    numberOfCars: null,
    needAccommodationHelp: false,
    message: null,
  });

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    const value = event.target.value as string;
    console.log(fieldName, value);
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));

    if (fieldName === 'travelOption') {
      setTravelOption(value as TravelOption);
    }
  };

  const handleSwitchChange = (
    event: SyntheticEvent<Element, Event>,
    fieldName: string
  ) => {
    const value = (event.target as HTMLInputElement).checked;
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: !!value,
    }));
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    setIsFormValid(isValid);

    if (isValid) {
      setIsSubmitting(true);
      createPost(formState).finally(() => {
        setIsSubmitting(false);
        navigate('/thank-you');
      });
    } else {
      setSnackbarOpen(true);
    }
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      adultGuests,
      childGuests,
      travelOption,
      numberOfCars,
      nameList,
    } = formState;

    const isValid =
      !!firstName &&
      !!lastName &&
      !!email &&
      adultGuests > 0 &&
      (adultGuests > 1 || childGuests > 0 ? nameList : true) &&
      (travelOption !== 'car' || numberOfCars);

    return Boolean(isValid);
  };

  return (
    <>
      <FormWrapper>
        <Typography variant="h4" fontFamily={'Charm'} color="primary">
          Festanmälan
        </Typography>
        <Typography variant="body1">
          {
            'Fyll i formuläret nedan för att anmäla dig/er till festen. Anmäl dig senast 18 maj.'
          }
        </Typography>
        <Typography variant="body1">
          {
            'Obs, anmälan görs per sällskap. Fyll i antal vuxna & barn (under 12 år). Skriv gärna alla gästers namn i meddelandet på slutet.'
          }
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <TextField
            label="Förnamn"
            fullWidth
            variant="filled"
            size={'small'}
            onChange={(event) => handleTextFieldChange(event, 'firstName')}
            required
          />
          <TextField
            label="Efternamn"
            fullWidth
            variant="filled"
            size={'small'}
            onChange={(event) => handleTextFieldChange(event, 'lastName')}
            required
          />
        </div>
        <TextField
          type="email"
          label="E-post"
          fullWidth
          variant="filled"
          size={'small'}
          onChange={(event) => handleTextFieldChange(event, 'email')}
          required
        />
        <TextField
          type="number"
          label="Antal vuxna"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Du själv plus eventuell partner och/eller barn 12 år eller äldre."
          onChange={(event) => handleTextFieldChange(event, 'adultGuests')}
          required
        />
        <TextField
          type="number"
          label="Antal barn"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Antal barn (under 12 år)"
          onChange={(event) => handleTextFieldChange(event, 'childGuests')}
        />
        {formState.adultGuests > 1 ||
        (formState.adultGuests >= 1 && formState.childGuests > 0) ? (
          <TextField
            fullWidth
            label="Namnlista"
            variant="filled"
            multiline
            rows={4}
            size={'small'}
            helperText="Namn på gäster utöver dig själv som du anmäler. Skriv i formatet: Förnamn Efternamn, Förnamn Efternamn"
            onChange={(event) => handleTextFieldChange(event, 'nameList')}
            required
          />
        ) : null}
        <TextField
          select
          value={travelOption || ''}
          onChange={(event) => handleTextFieldChange(event, 'travelOption')}
          label="Resealternativ"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Hur har du tänkt ta dig till bröllopet?"
          required
        >
          <MenuItem value="">
            <em>Välj ett alternativ</em>
          </MenuItem>
          <MenuItem value={'car'}>Bil</MenuItem>
          <MenuItem value={'public-transport'}>Kollektivt (Tåg/Buss)</MenuItem>
          <MenuItem value={'other'}>Annat</MenuItem>
        </TextField>
        {travelOption === 'car' && (
          <div style={{ padding: '16px', marginLeft: '16px' }}>
            <TextField
              type="number"
              label="Antal bilar"
              fullWidth
              variant="filled"
              size={'small'}
              helperText="Antal bilar ni kommer att åka med."
              onChange={(event) => handleTextFieldChange(event, 'numberOfCars')}
              required
            />
          </div>
        )}
        <FormControlLabel
          control={<Switch />}
          label="Behöver hjälp med boende"
          checked={!!formState.needAccommodationHelp}
          onChange={(event) =>
            handleSwitchChange(event, 'needAccommodationHelp')
          }
        />
        <TextField
          label="Matpreferens / Allergi"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="T.ex. vegetarisk, vegansk, glutenfri, laktosfri, nötallergi etc."
          onChange={(event) => handleTextFieldChange(event, 'foodPreferences')}
        />
        <TextField
          fullWidth
          label="Meddelande"
          variant="filled"
          multiline
          rows={4}
          size={'small'}
          helperText="Övrig information som kan vara bra för oss att veta."
          onChange={(event) => handleTextFieldChange(event, 'message')}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {'Skicka in anmälan'}
        </Button>
      </FormWrapper>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={10000}
        onClose={() => setSnackbarOpen(false)}
      >
        {isFormValid ? undefined : (
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Hoppsan! Formuläret verkar inte vara rätt ifyllt. Kika igenom om du
            missat något och försök igen.
          </Alert>
        )}
      </Snackbar>
    </>
  );
};
