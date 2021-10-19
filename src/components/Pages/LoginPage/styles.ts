import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1128px;
  padding-top: 55%;
`;

export const HomeMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40%;
  max-width: 1128px;
`;

export const LoginInput = styled.input`
  background-color: var(--white);
  border-radius: 10px;
  border: none;
  color: var(--graphite-light);
  height: 30px;
  opacity: 0.75;
  width: 228px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding-left: 15px;
  margin-bottom: 34px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ContainerButton = styled.div`
  background-color: var(--blue);
  max-width: 1128px;
  padding-top: 10%;
`;

export const ConcludedButton = styled.button`
  background-color: var(--graphite-light);
  border-radius: 10px;
  border: none;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  height: 30px;
  margin: 40px 0 30px 0;
  width: 95px;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 20vh;
  margin: 0 44% 8% 0;
`;

export const PreviousButton = styled.button`
  background-color: var(--blue);
  border-radius: 10px;
  border: none;
`;
