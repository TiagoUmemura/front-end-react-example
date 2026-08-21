import React from 'react';

import { TextField } from './styled-wrappers';

function InputText({ nameInput }) {
    return (
      <TextField type="text" name={nameInput} placeholder={nameInput}/>
    );
}

export default InputText;