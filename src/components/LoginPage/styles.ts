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

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 0 0 23px;
`;

export const Title = styled.div`
  margin: 0 0 0px 18px;
  width: 100%;

  .title {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--white);
  }

  .description {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: var(--white);
  }
`;

export const MenuLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  margin-top: 40%;
  max-width: 1128px;
`;

export const Registration = styled.input`
  background-color: var(--white);
  border-radius: 10px;
  border: none;
  color: var(--graphite-light);
  opacity: 0.75;
  width: 228px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 27px;
  &:hover {
    filter: brightness(0.8);
  }
`;
