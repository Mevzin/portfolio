import { Container, RouteButton, Navbar } from "./styles";

export default function Header() {
	return (
		<Container>
			<Navbar>
				<RouteButton>Home</RouteButton>
				<RouteButton>About</RouteButton>
				<RouteButton>Projects</RouteButton>
				<RouteButton>Skills</RouteButton>
				<RouteButton>Github</RouteButton>
			</Navbar>
		</Container>
	);
}
