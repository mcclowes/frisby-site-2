import styled from "styled-components";
import { Link, } from "react-router-dom";

import data from "src/data";
import { bpEach, } from "src/components/style/mixins";
import { GridCell, Banner, } from "src/components/common";

// --------------------------------------------------

const Container = styled(GridCell)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

const widths = R.map(n => `${100 / n}%`)({
	xs: 2,
	sm: 2,
	md: 3,
	lg: 4,
});

const CellWrapper = styled.div`
	${bpEach("width", widths)}
`;

const CellInner = styled(GridCell)`
`;

const Image = styled.div`
	background-color: #f8f8f8;
	background-image: url(${R.path([ "image", "url", ])});
	background-size: cover;
	background-position: center center;
	padding-top: 100%;
`;

const Text = styled.div`
	margin-top: 1em;
	text-align: center;
`;

const Cell = ({ image, title, slug, }) => (
	
		<CellWrapper>
		<Link to = { "/credit/" + slug }>
			<CellInner>
				<Image image = { image }/>
				<Text>{ title }</Text>
			</CellInner></Link>
		</CellWrapper>
	
);

const Credits = () => (
	<div>
		<Banner>Credits</Banner>
		<Container>
			{
				data.credits.map(o => <Cell key = { o.slug } { ...o }/>)
			}
		</Container>
	</div>
);

export default Credits;