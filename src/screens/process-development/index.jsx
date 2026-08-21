import React from 'react';

import { Container, ContainerCards, Title, ContainerTitle } from './styled-wrappers';
import CardText from '../../components/card-text';
import IdeaImg from '../../assets/icons/idea.svg';
import WireframeImg from '../../assets/icons/wireframe.svg';
import DesignImg from '../../assets/icons/design.svg';

function ProcessDevelopment() {
    return (
      <Container >
        <ContainerTitle>
          <Title>Processo de Desenvolvimento</Title>
        </ContainerTitle>
        <ContainerCards>
          <CardText 
            width={'22%'} 
            height={'65%'} 
            title={'1 - Ideia'} 
            icon={IdeaImg}
            color={'#f5d142'}
            text={'Até mesmo as ideias mais inovadoras e disruptivas precisam de um planejamento certeiro e uma estratégia vencedora! Juntos, vamos mergulhar na sua indústria, fazer brainstormings e mapear as principais características para desenvolver um app ou um sistema único!'}
          />
          <CardText 
            width={'22%'} 
            height={'65%'} 
            title={'2 - Wireframe'} 
            icon={WireframeImg}
            color={'#429cf5'}
            text={'Não tem nada mais importante do que estruturar da forma correta um projeto. No primeiro estágio do projeto nós criamos wireframe detalhados e destacamos cada função da aplicação.'}
          />
          <CardText 
            width={'22%'} 
            height={'65%'} 
            title={'3 - Design'} 
            icon={DesignImg}
            color={'#f59042'}
            text={'Um design único e elegante é fundamental para o sucesso de um app ou um sistema web! Nossos designers sabem isso melhor do que ninguém. É por isso que em cada aplicativo IOS e Android que criamos tomamos cuidados para seguir as melhores e mais novas tendências dos apps de sucesso.'}
          />
        </ContainerCards>
      </Container>
    );
}

export default ProcessDevelopment;