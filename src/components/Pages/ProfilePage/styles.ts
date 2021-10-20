import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 37px 0 45px;
  max-width: 1128px;
  padding-top: 33%;
`;

export const ContainerProfile = styled.div`
  background: var(--white);
  display: flex;
  height: 60vh;
  flex-direction: column;
  margin-top: 30%;
  width: 100%;

  h1 {
    padding: 0 0 0 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  margin-top: 40%;
  max-width: 1128px;
`;
