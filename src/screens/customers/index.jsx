import React from 'react';

import { Container, ContainerIcons } from './styled-wrappers';
import IconText from '../../components/icon-text';
import TiCompanies from '../../assets/icons/ti-companies.svg';
import AgenciesImage from '../../assets/icons/agencies.svg';
import StartupsImagem from '../../assets/icons/startups.svg';

function Customers() {
    return (
      <Container>
          <ContainerIcons>
            <IconText 
                icon={TiCompanies} 
                title={'Empresa de T.I'} 
                text={'Ajudamos empresas de T.I a entregar projetos mobile e web com excelência para seus clientes.'}
            />
            <IconText 
                icon={AgenciesImage} 
                title={'Para agências'} 
                text={'Ajudamos agências a criar aplicativos com um design impecável.'}
            />
            <IconText 
                icon={StartupsImagem} 
                title={'Startup\'s'} 
                text={'Para de gastar tempo com coisa que não vai pra frente, deixa o desenvolvimento do seu aplicativo ou aplicação web com os ninjas.'}
            />
          </ContainerIcons>
      </Container>
    );
}

export default Customers;