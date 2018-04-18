import styled from "styled-components";
import Generic from "./Generic";
import Vimeo from "react-vimeo";

import { Button, HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

const ButtonWrapper = styled.div`
	margin: 2em auto 0;
	text-align: center;

	&:hover {
		color: white;
	}
`;

const VimeoWrapper = styled.div`
	.vimeo-image,
	.vimeo-image:after,
	.vimeo-embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.vimeo {
		position: relative;
		padding-bottom: 56.25%;
		background: #e2e2e2;
	}
	.vimeo iframe {
		border: 0;
	}
	.vimeo-image {
		background-position: center center;
		background-size: 100% auto;
	}
	.vimeo-image:after {
		z-index: 1;
		display: block;
		content: "";
		background: rgba(0, 0, 0, 0.3);
	}
	.vimeo-play-button,
	.vimeo-loading {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.vimeo-play-button {
		z-index: 2;
		position: absolute;
		padding: 0;
		width: 70px;
		border: 0;
		background: none;
	}
	.vimeo-play-button:focus {
		outline: none;
	}
	.vimeo-play-button svg {
		fill: #fff;
		-webkit-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.8));
		filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.8));
	}
	.vimeo-loading {
		z-index: 4;
		position: absolute;
		width: 32px;
		height: 32px;
	}
	.vimeo-loading svg {
		fill: #000;
		transform-origin: 50% 50%;
		-webkit-animation: spinner 0.8s infinite linear;
		animation: spinner 0.8s infinite linear;
	}
	.vimeo-embed iframe {
		width: 100%;
		height: 100%;
	}
	@-moz-keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@-o-keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
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
