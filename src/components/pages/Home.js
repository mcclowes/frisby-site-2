import { Container, } from "src/components/common";
import styled from "styled-components";

import data from "src/data";
import * as vars from "src/components/style/vars";
import * as mixins from "src/components/style/mixins";
import { GridCell, Button, } from "src/components/common";

// --------------------------------------------------

const HeroImage = styled(GridCell)`
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

const TextWrapper = styled(GridCell)`
	max-width: 36em;
`;

const TitleText = styled.div`
	font-size: 3em;
	font-family: ${vars.font.title.family};
`;

const ButtonWrapper = styled.div`
	margin-top: 2em;
`;

const Home = () => (
	<HeroImage>
		<TextWrapper>
			<TitleText>Jane Frisby</TitleText>
			<p>Caster. Producer. Genius. Thoughtleader. Philanthropist. Legend.</p>
			<p>Some more text to say a bit more stuff here in the home page that basically says you should clcik the btton and go to the about page.</p>
			<ButtonWrapper>
				<Button to = "/about">Find out more</Button>
			</ButtonWrapper>
		</TextWrapper>
	</HeroImage>
);

export default Home;