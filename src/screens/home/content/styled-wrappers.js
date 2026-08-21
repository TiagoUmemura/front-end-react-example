import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
`;

export const TextHomeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content:right;
    align-items: flex-start;
    line-height: 200%;
`;

export const InfoHomeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content:right;
    align-items: flex-end;
    padding-right: 12%;
`;

export const HomeText = styled.span`
    color: white;
    font-size: 1.2vw;
    text-align: left;
    font-weight: bold;
    word-spacing: 15px;
`;

export const DevNinjaText = styled.span`
    color: #f5aa42;
`;

export const ImgHomeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    padding-top: 15%;
`;

export const Img = styled.img`
    width: 60%;
    height: 60%;
`;