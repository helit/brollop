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
import { useEffect, useState } from 'react';
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
  const [sleepOver, setSleepOver] = useState<boolean>(false);

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
    numberOfBeds: null,
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
      numberOfBeds,
      nameList,
    } = formState;

    const isValid =
      !!firstName &&
      !!lastName &&
      !!email &&
      adultGuests > 0 &&
      (adultGuests > 1 || childGuests > 0 ? nameList : true) &&
      (travelOption !== 'car' || numberOfCars) &&
      (sleepOver ? numberOfBeds : true);

    return Boolean(isValid);
  };

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
        <Typography variant="h4" fontFamily={'Charm'} color="primary">
          Gästanmälan
        </Typography>
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
          helperText="Du själv plus eventuell partner och barn 12 år eller äldre."
          onChange={(event) => handleTextFieldChange(event, 'adultGuests')}
          required
        />
        <TextField
          type="number"
          label="Antal barn"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Antal barn under 12 år, äldre barn räknar vi som vuxna"
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
              helperText="Antal bilar ni kommer att åka med. O.B.S. Vi har begränsat antal parkeringsplatser."
              onChange={(event) => handleTextFieldChange(event, 'numberOfCars')}
              required
            />
          </div>
        )}
        <FormControlLabel
          control={<Switch />}
          label="Vill sova över"
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
              onChange={(event) => handleTextFieldChange(event, 'numberOfBeds')}
              required
            />
          </div>
        )}
        <TextField
          label="Matpreferens / Allergi"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="t.ex. vegetarisk, vegansk, glutenfri, laktosfri, nötallergi etc."
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
        autoHideDuration={6000}
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
