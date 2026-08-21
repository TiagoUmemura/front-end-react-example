import React from 'react';

import { Container, ContainerInputLine, Title } from './styled-wrappers';
import InputText from '../../../components/input-text';
import TextArea from '../../../components/text-area';

function InputTextForm({ title, checkboxNames }) {
    return (
      <Container>
          <Title>3 - Informações pessoais</Title>
          <ContainerInputLine>
              <InputText nameInput={'Nome'}></InputText>
              <InputText nameInput={'Email'}></InputText>
              <InputText nameInput={'Telefone'}></InputText>
          </ContainerInputLine>
          <ContainerInputLine>
              <InputText nameInput={'Cidade'}></InputText>
              <InputText nameInput={'Empresa'}></InputText>
              <InputText nameInput={'Cargo'}></InputText>
          </ContainerInputLine>
          <ContainerInputLine>
              <TextArea nameInput={'Explique seu projeto...'}></TextArea>
          </ContainerInputLine>
      </Container>
    );
}

export default InputTextForm;