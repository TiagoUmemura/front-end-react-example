import React from 'react';

import LogoDevNinjas from '../../assets/img/logo-devninjas-color.png'
import { Container, ContainerImg, Icon, ContainerText, Text, ContainerRow } from './styled-wrappers';

function Footer() {
    return (
      <Container>
        <ContainerImg>
            <Icon src={LogoDevNinjas} alt={'devninjas_logo'}/>
        </ContainerImg>
        <ContainerRow>
            <ContainerText>
                <Text>contato@devninjas.com.br</Text>
                <Text>44 3123-8848</Text>
                <Text>Av. Monteiro Lobato, 1214 - Zona 8, Maringá - PR, 87050-280</Text>
                <Text>Não diga 'Alê', diga "Como vão ninjas?"</Text>
            </ContainerText>
        </ContainerRow>
      </Container>
    );
}

export default Footer;