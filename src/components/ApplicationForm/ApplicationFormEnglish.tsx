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

export const ApplicationFormEnglish = () => {
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
          Party registration form
        </Typography>
        <Typography variant="body1">
          {
            'Fill in the form below to register for the event. Register no later than May 18th.'
          }
        </Typography>
        <Typography variant="body1">
          {
            'Note, registration is per party of guest(s). Fill in the number of adults & children (under 12 years). Please write the names of all guests in the message at the end.'
          }
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <TextField
            label="First name"
            fullWidth
            variant="filled"
            size={'small'}
            onChange={(event) => handleTextFieldChange(event, 'firstName')}
            required
          />
          <TextField
            label="Surname"
            fullWidth
            variant="filled"
            size={'small'}
            onChange={(event) => handleTextFieldChange(event, 'lastName')}
            required
          />
        </div>
        <TextField
          type="email"
          label="Email"
          fullWidth
          variant="filled"
          size={'small'}
          onChange={(event) => handleTextFieldChange(event, 'email')}
          required
        />
        <TextField
          type="number"
          label="Number of adults"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Yourself plus any partner and/or children aged 12 or over."
          onChange={(event) => handleTextFieldChange(event, 'adultGuests')}
          required
        />
        <TextField
          type="number"
          label="Number of children"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="Number of children (under the age of 12)"
          onChange={(event) => handleTextFieldChange(event, 'childGuests')}
        />
        {formState.adultGuests > 1 ||
        (formState.adultGuests >= 1 && formState.childGuests > 0) ? (
          <TextField
            fullWidth
            label="List of names"
            variant="filled"
            multiline
            rows={4}
            size={'small'}
            helperText="Names of guests other than yourself that you are registering. Write in the format: First name Last name, First name Last name"
            onChange={(event) => handleTextFieldChange(event, 'nameList')}
            required
          />
        ) : null}
        <TextField
          select
          value={travelOption || ''}
          onChange={(event) => handleTextFieldChange(event, 'travelOption')}
          label="Travel options"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="How do you plan to get to the wedding?"
          required
        >
          <MenuItem value="">
            <em>Select an option</em>
          </MenuItem>
          <MenuItem value={'car'}>Car</MenuItem>
          <MenuItem value={'public-transport'}>Public (Train/Bus)</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </TextField>
        {travelOption === 'car' && (
          <div style={{ padding: '16px', marginLeft: '16px' }}>
            <TextField
              type="number"
              label="Number of cars"
              fullWidth
              variant="filled"
              size={'small'}
              helperText="Number of cars you will travel with."
              onChange={(event) => handleTextFieldChange(event, 'numberOfCars')}
              required
            />
          </div>
        )}
        <FormControlLabel
          control={<Switch />}
          label="Need help with housing"
          checked={!!formState.needAccommodationHelp}
          onChange={(event) =>
            handleSwitchChange(event, 'needAccommodationHelp')
          }
        />
        <TextField
          label="Food preference / Allergy"
          fullWidth
          variant="filled"
          size={'small'}
          helperText="E.g. vegetarian, vegan, gluten-free, lactose-free, nut allergy, etc."
          onChange={(event) => handleTextFieldChange(event, 'foodPreferences')}
        />
        <TextField
          fullWidth
          label="Message"
          variant="filled"
          multiline
          rows={4}
          size={'small'}
          helperText="Other information that may be useful for us to know."
          onChange={(event) => handleTextFieldChange(event, 'message')}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {'Submit'}
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
            Oops! The form does not seem to be filled in correctly. Please check
            if you missed something and try again.
          </Alert>
        )}
      </Snackbar>
    </>
  );
};
