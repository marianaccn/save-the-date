import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 40px;
  max-width: 1128px;
  padding-top: 33%;
`;

export const ContainerMyEvents = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  height: 57vh;
  margin: 69.89px 57px 64px 30px;
  width: 100%;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 0 0 6px;
  }

  .title {
    display: flex;
    justify-content: flex-start;
  }
`;

export const ContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  height: 32vh;
  margin-top: 11%;
  max-width: 1128px;
`;

export const ContainerElements = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`;

export const DivEvento = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  border: 1px solid var(--graphite);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin-left: 13px;
  padding: 0 15px 15px 26px;
  width: 85%;

  h3 {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--blue);
  color: var(--black);
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 400;
  width: 284px;
  margin-right: 11px;

  ::placeholder {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
  }
`;

export const Footer = styled.div`
  display: flex;
  height: 5vh;
  justify-content: flex-start;
  margin: 0 5%;
  padding-bottom: 10px;
  width: 100%;
`;

export const PreviousButton = styled.button`
  background-color: var(--white);
  border: none;
`;
