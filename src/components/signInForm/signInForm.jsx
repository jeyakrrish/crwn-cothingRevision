import { useState } from 'react';
import { useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import FormInput from '../formInput/formInput';

import { signIn, signInWithGooglePopup } from '../../utils/firebase-utils';

import { selectCurrentUser } from '../../store/user/user.selector';

import './signInForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = ({ errMsg }) => {
  const currentUser = useSelector(selectCurrentUser);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logInWithGoogle = async () => {
    if (currentUser) {
      alert("Already you've been logged-in");
      return;
    }

    try {
      await signInWithGooglePopup()
    } catch (err) {
      errMsg(err.code);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();
    if (currentUser) {
      alert("Already you've been logged-in");
      return;
    }

    try {
      await signIn(email, password);
    } catch (error) {
      errMsg(error.code);
    }

  }

  return (
    <div className='sign-in-form-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitForm}>

        <FormInput label="Email"
          type='email'
          onChange={handleChange}
          name='email'
          value={email.toLocaleLowerCase()}
          required
        />

        <FormInput label="Password"
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />

        <div className='btn-group'>
          <Button type='submit'><span>SIGN IN</span></Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={logInWithGoogle}>
            <span>GOOGLE SIGN IN</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;