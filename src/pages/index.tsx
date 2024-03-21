/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import CardAboutMe from "@components/CardAboutMe";
import CardProjects from "@components/CardProjects";
import ContactMe from "@components/ContactMe";
import Skills from "@components/Skills";
import styles from "./home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<div id="home" className={styles.bannerContainer}>
				<div className={styles.text}>
					<h1>
						Olá meu nome é<span> Thiago Torres </span>e sou desenvolvedor Front
						End
					</h1>
				</div>
				<img src="/assets/profile.png" alt="Profile photo" />
			</div>
			<CardAboutMe />
			<Skills />
			<CardProjects />
			<ContactMe />
		</div>
	);
}
