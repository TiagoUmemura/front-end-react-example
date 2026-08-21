import React from 'react';

import { Container, 
        ImgHomeContainer, 
        Img, 
        TextHomeContainer, 
        HomeText, 
        InfoHomeContainer, 
        DevNinjaText ,
        ButtonContainer
      } from './styled-wrappers';
import Button from '../../../components/button';
import ImgHome from '../../../assets/img/img-home.png';

function Content() {
    return (
      <Container>
        <InfoHomeContainer>
          <TextHomeContainer>
              <HomeText>Sua empresa focada no negócio.</HomeText>
              <HomeText>A <DevNinjaText>devninjas</DevNinjaText> focada no</HomeText>
              <HomeText>desenvolvimento do aplicativo</HomeText>
              <ButtonContainer>
                <Button 
                  width={'60%'} 
                  height={'10%'} 
                  text={'Conheça a devninjas'} 
                  onClickHandler={() => console.log('test click')}
                />
              </ButtonContainer>
          </TextHomeContainer>
        </InfoHomeContainer>
        <ImgHomeContainer>
            <Img src={ImgHome} alt='img_home'/>
        </ImgHomeContainer>
      </Container>
    );
}

export default Content;