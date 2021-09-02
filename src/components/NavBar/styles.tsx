import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  
  nav{
    display: flex;
  }
  `;

export const ButtonNav = styled.button`
  color: var(--white);
  border: 1px solid var(--gray);
  width: 26.81rem;
  height: 100%;
  margin-left: -0.59rem;
  margin-top: -0.05rem;

  transition: 0.2s;

  &:hover{
    filter: brightness(0.9);
  }

  &:first-child {
    border-radius: 10px 0 0 0;
  }

  &:last-child {
    border-radius: 0 10px 0 0;
  }
`;