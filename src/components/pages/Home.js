import { Container, } from "src/components/common";
import styled from "styled-components";

import data from "src/data";

// --------------------------------------------------

const HeroImage = styled.div`
	height: 100vh;
	background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
		url(${data.homePage.hero.url});
	background-size: cover;
	background-position: center center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
	text-align: center;
`;

const Home = () => (
	<HeroImage>
		<div>
			<h1>Jane Frisby</h1>
			<p>Caster. Producer. Genius. Thoughtleader. Philanthropist. Legend.</p>
		</div>
		{ console.log(data) }
	</HeroImage>
);

export default Home;