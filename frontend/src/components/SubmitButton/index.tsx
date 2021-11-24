import React from 'react';

import { Submit } from './styles';

interface SubmitButtonProps {
  text: string,
  disabled: boolean
}

const SubmitButton = ({ text, disabled }: SubmitButtonProps): React.ReactElement => {
  return (
    <Submit type="submit" disabled={disabled}>
      {text}
    </Submit>
  )
}

export default SubmitButton

