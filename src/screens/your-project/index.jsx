import React from 'react';

import { Container, TitleContainer, Title } from './styled-wrappers';
import CheckBoxForm from './checkbox-form';
import InputTextForm from './input-text-form';

function YourProject() {
    return (
      <Container >
          <TitleContainer>
              <Title>Agora chegou a hora de saber mais sobre seu projeto!</Title>
          </TitleContainer>
          <CheckBoxForm 
            title={'1. Qual o tipo do seu projeto'} 
            checkboxNames={['IOS','Android', 'Smarwatch', 'Sistema web', 'Site', 'Criação/Integração Web API']}
          />
          <CheckBoxForm 
            title={'2. Qual o estágio do projeto'} 
            checkboxNames={['Ideia', 'Execução', 'Manutenção']}
          />
          <InputTextForm/>
      </Container>
    );
}

export default YourProject;