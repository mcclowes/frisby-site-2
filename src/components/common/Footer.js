import React from "react";
import styled from "styled-components";

import * as mixins from "codogo-utility-functions";

import * as vars from "../style/vars";

import { Icon, } from "./misc";

// --------------------------------------------------

const Wrapper = styled.footer`
	background-color: ${ R.path([ "theme", "footer", ]) };
	color: white;
	${ mixins.bpEither("height", vars.dim.footer.height) } ${ mixins.bpEither(
	"padding",
	vars.dim.nav.margin,
) };
	align-items: center;
	border-top: 1px solid ${ mixins.transparent(0.2) };
	bottom: 0;
	display: flex;
	justify-content: space-between;
	left: 0;
	overflow: hidden;
	position: absolute;
	right: 0;

	font-size: 0.9em;
`;

const Left = styled.div`
	font-weight: bold;
`;

const Right = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 1.5em;

	a {
		margin-left: 0.5em;
	}
`;

const Stuff = styled.div``;

const Credit = styled.a`
	display: block;
`;

const Footer = () => (
	<Wrapper>
		<Stuff>© Jane Frisby 2017</Stuff>
		<Credit href = "https://consulting.codogo.io">website by Codogo</Credit>
	</Wrapper>
);

export default Footer;
