import React from 'react';

import { Container,Text } from './styled-wrappers';

function Button({width, height, text, onClickHandler}) {
    return (
      <Container width={width} height={height} onClick={onClickHandler}>
          <Text>{text}</Text>
      </Container>
    );
}

export default Button;