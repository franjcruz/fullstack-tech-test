import { Field } from 'formik';
import React from 'react';

import { Label, Select } from './styles';

interface SelectFieldProps {
  text: string
  name: string
  error?: boolean
  children: React.ReactNode
}

const SelectField = ({ text, name, error, children }: SelectFieldProps): React.ReactElement => {
  return (
    <Label>
      {text}
      <Select forwardedAs={"select"} name={name} error={error} >
        {children}
      </Select>
    </Label>
  )
}

export default SelectField
