import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --purple: #5B3976;
    --white: #FFFFFF;
    --white-dark: #7b7b7b;
  }
  
  *{
    background: var(--purple);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  
  button{
    cursor: pointer;
  }
  
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  
`;