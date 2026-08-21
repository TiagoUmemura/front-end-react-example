import React from 'react';
import { Container, MenuTitle, MenuContainer, LogoContainer, Logo } from './styled-wrappers';
import LogoDevNinjas from '../../assets/img/logo-devninjas.png';

function MenuBar() {
    return (
      <Container >
        <LogoContainer>
          <Logo src={LogoDevNinjas} alt='logo_devninjas'/>
        </LogoContainer>
        <MenuContainer>
          <MenuTitle>Home</MenuTitle>
          <MenuTitle>Serviços</MenuTitle>
          <MenuTitle>Desenvolvimento de projetos</MenuTitle>
          <MenuTitle>Orçamento</MenuTitle>
        </MenuContainer>
      </Container>
    );
}

export default MenuBar;