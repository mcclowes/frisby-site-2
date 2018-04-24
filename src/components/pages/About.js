import styled from "styled-components";
import Vimeo from "react-vimeo";

import Generic from "src/components/pages/Generic";

import { Button, HtmlContent, VimeoWrapper, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

const ButtonWrapper = styled.div`
	margin: 2em auto 0;
	text-align: center;

	&:hover {
		color: white;
	}
`;

// --------------------------------------------------

export default () => (
	<Generic title = "About Jane" src = { data.aboutPage.image.url }>
		<VimeoWrapper>
			<Vimeo videoId = { "9945440" } />
		</VimeoWrapper>

		<HtmlContent>{data.aboutPage.html}</HtmlContent>

		<ButtonWrapper>
			<Button to = "/credits">See Jane's Credits</Button>
		</ButtonWrapper>
	</Generic>
);
