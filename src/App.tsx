import React from 'react';
import { CardContents } from './components/CardContents';
import { Profile } from './pages/profile';
import { Container, SplitLeft, SplitRight } from './style';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <SplitLeft>
        <Profile />
      </SplitLeft>
      <SplitRight>
        <CardContents />
      </SplitRight>
    </Container>
  );
}

export default App;
