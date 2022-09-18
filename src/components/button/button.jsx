import { BaseButton, GoogleSignIn, Inverted } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  baseButton: 'baseButton',
  google: 'googleButton',
  inverted: 'invertedButton',
}

//! getButton helper function
const getButton = (buttonType = BUTTON_TYPE_CLASSES.baseButton) => (
  {
    [BUTTON_TYPE_CLASSES.baseButton]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
  
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  )
}

export default Button; 