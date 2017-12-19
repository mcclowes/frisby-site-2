import styled from "styled-components";
import Generic from "./Generic";

import { Button, HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

const ButtonWrapper = styled.div`
	margin: 2em auto 0;
	text-align: center;

	.${Button.className}::hover {
		color: white;
	}
`;

export default () => (
	<Generic title = "About Jane" src = { data.aboutPage.image.url }>
		<HtmlContent>{ data.aboutPage.html }</HtmlContent>
			<ButtonWrapper>
				<Button to = "/credits">See Jane's Credits</Button>
			</ButtonWrapper>
	</Generic>
);
