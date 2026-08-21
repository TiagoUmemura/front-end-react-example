import React from 'react';

import { Container,Img, Title, TitleContainer, Text, TextContainer } from './styled-wrappers';

function IconText({icon, title, text, widthImg, heightImg}) {
    return (
      <Container>
          <Img src={icon} width={widthImg} height={heightImg}/>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <TextContainer>
            <Text>{text}</Text>
          </TextContainer>
      </Container>
    );
}

export default IconText;