import styled from "styled-components";
import { Link, } from "react-router-dom";
import Moment from "moment";

import data from "src/data";
import { bpEach, } from "src/components/style/mixins";
import { GridCell, Banner, } from "src/components/common";

// --------------------------------------------------
const creditsList = data.credits;
creditsList.sort(
	(x, y) => {
		return new Date(y.released || y.createdAt) - new Date(x.released || x.createdDate);
	}
);

console.log(creditsList);

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
	background-image: url(http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${R.path([ "image", "url", ])});
	background-size: cover;
	background-position: center center;
	padding-top: 60%;
`;

const Text = styled.div`
	margin-top: 1em;
	text-align: center;
`;

const Subtext = styled.div`
	margin-top: 1em;
	font-size: 0.8em;
	text-align: center;
	opacity: 0.7;
`;

const Cell = ({ image, title, slug, productionType, role, released, }) => (
	<CellWrapper>
		<Link to = { "/credit/" + slug }>
			<CellInner>
				<Image image = { image }/>
	
				<Text>{ title }</Text>

				<Subtext>
					{ `${ role }  -  ` }
					{ Moment(released).format('YYYY') }
				</Subtext>
			</CellInner>
		</Link>
	</CellWrapper>
);

const Credits = () => (
	<div>
		<Banner>Credits</Banner>

		<Container>
			{
				creditsList.map(o => <Cell key = { o.slug } { ...o }/>)
			}
		</Container>
	</div>
);

export default Credits;