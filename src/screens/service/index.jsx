import React from 'react';

import { Container, IconsContainer, Title } from './styled-wrappers';
import IconText from '../../components/icon-text'; 
import DevAppImage from '../../assets/icons/dev-app.svg';
import WebSystemImage from '../../assets/icons/web-system.svg';
import UiUxDesign from '../../assets/icons/ui-ux-design.svg';
import AccelerationProjectsImage from '../../assets/icons/acceleration-projects.svg';

function Service() {
    return (
      <Container >
        <Title>Aqui se faz, aqui se cria ;)</Title>
        <IconsContainer>
          <IconText 
            icon={DevAppImage} 
            title={'Desenvolvimento de Applicativos'}
            text={'Focados em alto desempenho e segurança'}
          />
          <IconText 
            icon={WebSystemImage} 
            title={'Sistemas Web Sobdemanda'}
            text={'Com interfaces clean e intuitivas'}
          />
          <IconText 
            icon={UiUxDesign} 
            title={'UI/UX Design'}
            text={'Criamos de identidade visual e pensamos na usabilidade e na experiência do usuário'}
          />
          <IconText 
            icon={AccelerationProjectsImage} 
            title={'Aceleração de Projetos'}
            text={'Acelere seu processo de inovação'}
          />
        </IconsContainer>
      </Container>
    );
}

export default Service;