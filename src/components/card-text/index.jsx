import React from 'react';

import { Container, Title, Text, ContainerIcon, Img,ContainerTitle, ContainerText, Hr } from './styled-wrappers';

function CardText({width, height, title, text, icon, color}) {
    return (
      <Container width={width} height={height}>
          <ContainerIcon><Img src={icon}/></ContainerIcon>
          <ContainerTitle>
            <Title color={color}>{title}</Title>
            <Hr color={color}/>
          </ContainerTitle>
          <ContainerText>
            <Text>{text}</Text>
          </ContainerText>
      </Container>
    );
}

export default CardText;