import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm/signUpForm';
import { errMsg } from './errMsgHelper';
import './auth.styles.scss';

const Auth = () => (
  <div className='auth-container'>
    <SignInForm errMsg={errMsg} />
    <SignUpForm errMsg={errMsg} />
  </div>
);

export default Auth;