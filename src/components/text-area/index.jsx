import React from 'react';

import { TextField } from './styled-wrappers';

function TextArea({ nameInput, width }) {
    return (
      <TextField name={nameInput} placeholder={nameInput} width={width} rows='4'/>
    );
}

export default TextArea;