import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1128px;
  padding-top: 60%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const MenuLogin = styled.div`
  max-width: 1128px;
  margin: 42% auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuBtn = styled.div`
  max-width: 1128px;
  height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
