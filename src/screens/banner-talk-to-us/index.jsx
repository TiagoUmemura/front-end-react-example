import React from 'react';

import { 
    Container, 
    ContainerTitle, 
    ContainerDetailText, 
    ContainerText, 
    Title, 
    Text,
    DetailText 
} from './styled-wrappers';

function BannerTalkToUs() {
    return (
      <Container>
        <ContainerTitle>
            <Title>Gostou da gente?</Title>
        </ContainerTitle>
        <ContainerText>
            <Text>Vamos bater um papo. O café é por nossa conta!</Text>
        </ContainerText>
        <ContainerDetailText>
            <DetailText>Ou manda um e-mail, whats, carta, pombo correio, sinal de fumaça...)</DetailText>
        </ContainerDetailText>
      </Container>
    );
}

export default BannerTalkToUs;