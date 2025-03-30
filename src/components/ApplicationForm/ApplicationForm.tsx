import {
  Alert,
  Button,
  FormControlLabel,
  Snackbar,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { FormWrapper } from './ApplicationForm.styled';
import { useEffect, useState } from 'react';
import { useDb } from '../../hooks/useDb';
import { useNavigate } from 'react-router-dom';
import { PostType } from '../../types/postType';

export const ApplicationForm = () => {
  const navigate = useNavigate();
  const { createPost } = useDb();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [travelByCar, setTravelByCar] = useState<boolean>(false);
  const [sleepOver, setSleepOver] = useState<boolean>(false);

  const [formState, setFormState] = useState<PostType>({
    firstName: '',
    lastName: '',
    email: '',
    adultGuests: 0,
    childGuests: 0,
    foodPreferences: null,
    travelOption: '',
    numberOfCars: null,
    numberOfBeds: null,
    message: null,
  });

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value as string;
    setFormState((prevState) => ({
      ...prevState,
      firstName: selectedValue,
    }));
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value as string;
    setFormState((prevState) => ({
      ...prevState,
      lastName: selectedValue,
    }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value as string;
    setFormState((prevState) => ({
      ...prevState,
      email: selectedValue,
    }));
  };

  const handleAdultGuestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = parseInt(event.target.value) || 0;
    setFormState((prevState) => ({
      ...prevState,
      adultGuests: selectedValue,
    }));
  };

  const handleChildGuestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = parseInt(event.target.value) || 0;
    setFormState((prevState) => ({
      ...prevState,
      childGuests: selectedValue,
    }));
  };

  const handleNumberOfCarsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = parseInt(event.target.value) || 0;
    setFormState((prevState) => ({
      ...prevState,
      numberOfCars: selectedValue,
    }));
  };

  const handleNumberOfBedsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = parseInt(event.target.value) || 0;
    setFormState((prevState) => ({
      ...prevState,
      numberOfBeds: selectedValue,
    }));
  };

  const handleFoodPreferencesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value as string;
    setFormState((prevState) => ({
      ...prevState,
      foodPreferences: selectedValue,
    }));
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value as string;
    setFormState((prevState) => ({
      ...prevState,
      message: selectedValue,
    }));
  };

  const handleSubmit = () => {
    console.log('Submit!!!');
    const isValid = validateForm();
    setIsFormValid(isValid);

    if (isValid) {
      setIsSubmitting(true);
      createPost(formState).finally(() => {
        setIsSubmitting(false);
        navigate('/');
      });
    } else {
      setSnackbarOpen(true);
    }
  };

  const validateForm = () => {
    const isValid =
      formState.firstName.trim() !== '' &&
      formState.lastName.trim() !== '' &&
      formState.email.trim() !== '' &&
      formState.adultGuests > 0 &&
      formState.childGuests >= 0 &&
      (travelByCar && formState.numberOfCars
        ? formState.numberOfCars > 0
        : true) &&
      (sleepOver && formState.numberOfBeds ? formState.numberOfBeds > 0 : true);
    return isValid;
  };

  useEffect(() => {
    console.log('Form state changed:', formState);

    if (!travelByCar) {
      setFormState((prevState) => ({
        ...prevState,
        numberOfCars: 0,
        travelOption: 'bus',
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        travelOption: 'car',
      }));
    }
  }, [travelByCar]);

  useEffect(() => {
    if (!sleepOver) {
      setFormState((prevState) => ({
        ...prevState,
        numberOfBeds: 0,
      }));
    }
  }, [sleepOver]);

  return (
    <>
      <FormWrapper>
        <Typography variant="body1">
          {
            'Fyll i formuläret nedan för att anmäla dig till bröllopet. Anmäl dig senast 18 maj, 2025.'
          }
        </Typography>
        <Typography variant="body1">
          {
            'O.B.S. Om du kommer med partner/barn behöver du bara fylla i en anmälan och skriva i antal vuxna & barn (under 12 år). Skriv gärna alla gästers namn i meddelandet på slutet.'
          }
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <TextField
            label="Förnamn"
            fullWidth
            variant="filled"
            size={'small'}
            onChange={handleFirstNameChange}
          />
          <TextField
            label="Efternamn"
            fullWidth
            variant="filled"
            size={'small'}
            onChange={handleLastNameChange}
          />
        </div>
        <TextField
          type="email"
          label="E-post"
          fullWidth
          variant="filled"
          size={'small'}
          onChange={handleEmailChange}
        />
        <TextField
          type="number"
          label="Antal vuxna"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Du själv plus eventuell partner och barn 12 år eller äldre."
          onChange={handleAdultGuestsChange}
        />
        <TextField
          type="number"
          label="Antal barn"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Antal barn under 12 år, äldre barn räknar vi som vuxna"
          onChange={handleChildGuestsChange}
        />
        <FormControlLabel
          control={<Switch />}
          label="Jag reser med bil"
          checked={travelByCar}
          onChange={(event, checked) => setTravelByCar(checked)}
        />
        {travelByCar && (
          <div style={{ padding: '16px', marginLeft: '16px' }}>
            <TextField
              type="number"
              label="Antal bilar"
              fullWidth
              variant="filled"
              size={'small'}
              helperText="Antal bilar ni kommer att åka med. O.B.S. Vi har begränsat antal parkeringsplatser."
              onChange={handleNumberOfCarsChange}
              required={travelByCar}
            />
          </div>
        )}
        <FormControlLabel
          control={<Switch />}
          label="Jag vill sova över"
          checked={sleepOver}
          onChange={(event, checked) => setSleepOver(checked)}
        />
        {sleepOver && (
          <div style={{ padding: '16px', marginLeft: '16px' }}>
            <TextField
              type="number"
              label="Antal sängar"
              fullWidth
              variant="filled"
              size={'small'}
              helperText="Antal sängar ni behöver. O.B.S. Vi har begränsat antal sovplatser."
              onChange={handleNumberOfBedsChange}
            />
          </div>
        )}
        <TextField
          label="Matpreferens / Allergi"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="t.ex. vegetarisk, vegansk, glutenfri, laktosfri, nötallergi etc."
          onChange={handleFoodPreferencesChange}
        />
        <TextField
          fullWidth
          label="Meddelande"
          variant="filled"
          multiline
          rows={8}
          size={'small'}
          helperText="Övrig information bra att veta samt namn på gäster utöver dig själv som du anmäler."
          onChange={handleMessageChange}
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
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
      >
        {isFormValid ? undefined : (
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Hoppsan! Formuläret verkar inte vara rätt ifyllt. Kika igenom och
            försök igen.
          </Alert>
        )}
      </Snackbar>
    </>
  );
};
