import styled from "styled-components";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";
import { objectMap, } from "codogo-utility-functions";

// --------------------------------------------------

const minHeights = objectMap(
	vars.dim.nav.height,
	(k, val) => `calc(100vh - ${ val })`,
);

// const Bg = styled.div`
// 	${mixins.contained()}
// 	z-index: -1;
// 	background-image: url(${R.prop("bgImage")});
// 	background-size: cover;
// 	background-color: black;
// `;

const Bg = () => null;

const PrevBg = Bg;
const CurrentBg = Bg;

const Wrapper = styled.main`
	${ props =>
		props.home || true
			? ""
			: mixins.bpEither(
				"padding-top",
				vars.dim.nav.height,
			  ) } background-color: ${ R.path([ "theme", "body", ]) };
	position: relative;
	min-height: 100vh;
`;

const Main = ({ bgImage, children, home, }) => (
	<Wrapper home = { home }>
		<PrevBg />
		<CurrentBg bgImage = { bgImage } />
		{children}
	</Wrapper>
);

export default Main;

// ${ mixins.bpEither("margin-top", vars.dim.nav.height) }
