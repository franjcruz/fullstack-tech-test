import React from 'react';

import { Input, Label } from './styles';

interface InputFieldProps {
  text: string
  name: string
  type: string
  error?: boolean
}

const InputField = ({ text, name, type, error }: InputFieldProps): React.ReactElement => {
  return (
    <Label>
      {text}
      < Input type={type} name={name} error={error} />
    </Label>
  )
}

export default InputField

