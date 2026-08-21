import React from 'react';

import { Container, Title, ContainerCheckbox } from './styled-wrappers';
import Checkbox from '../../../components/checkbox';

function CheckBoxForm({ title, checkboxNames }) {
    return (
      <Container>
          <Title>{title}</Title>
          <ContainerCheckbox>
            {checkboxNames.map((name) => {return <Checkbox text={name}/>})}
          </ContainerCheckbox>
      </Container>
    );
}

export default CheckBoxForm;