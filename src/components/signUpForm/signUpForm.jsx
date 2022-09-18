import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { signUp } from '../../utils/firebase-utils';

import Button from '../button/button';

import FormInput from '../formInput/formInput';

import './signUpForm.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = ({ errMsg }) => {

  const { currentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
      alert("Already signned-in");
      return;
    }

    try {
      if (password === confirmPassword) await signUp(displayName, email, password);
      else alert("Entered passords doesn't matched");
    } catch (err) {
      errMsg(err.code);
    }
  }

  return (
    <div className='sign-up-form-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={submitForm}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
        />
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email.toLocaleLowerCase()}
          required
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />
        <FormInput
          label='Confirm password'
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
        />

        <Button type='submit'><span>SIGN UP</span></Button>
      </form>

    </div >
  )
}

export default SignUpForm;