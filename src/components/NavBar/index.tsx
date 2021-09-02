import { ButtonNav, Container } from "./styles";

export function NavBar() {

  return (
    <Container>
      <nav>
        <ButtonNav> REPOSITORIES</ButtonNav>
        <ButtonNav> ABOUT ME</ButtonNav>
        <ButtonNav> PRODUCTION PROJECTS</ButtonNav>
      </nav>
    </Container>
  );
}