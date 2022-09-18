import { Group, FormInpuT, FormInputLabel } from './formInput.styles';

const FormInput = ({ label, ...otherProps }) => {

  return (
    <Group>
      <FormInpuT {...otherProps} />

      <FormInputLabel shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
    </Group>
  )
}

export default FormInput;