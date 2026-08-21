import React from 'react';

import { Container, ContainerText, Text, TextDevNinja } from './styled-wrappers';

function BannerProcessDevelopment() {
    return (
      <Container>
        <ContainerText>
            <Text>Não deixa para depois,</Text>
        </ContainerText>
        <ContainerText>
            <Text>deixa para os</Text>
        </ContainerText>
        <ContainerText>
            <TextDevNinja>devninjas</TextDevNinja>
        </ContainerText>
      </Container>
    );
}

export default BannerProcessDevelopment;