import React from "react";

import { Container, Hero, ImageProfile } from "./styles";

export function Home() {
	return (
		<Container>
			<Hero>
				Hi my name is <span>Thiago Torres</span> and I'm a developer Front End
			</Hero>
			<ImageProfile src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
		</Container>
	);
}
