import styled from "styled-components";
import Moment from "moment";

import data from "src/data";
import { bpEach } from "src/components/style/mixins";
import { colors } from "src/components/style/vars";
import { HtmlContent, Button, GridCell, Banner } from "src/components/common";
import Head from "src/components/common/Head";

// --------------------------------------------------

const creditsList = data.credits;
creditsList.sort((x, y) => {
	return (
		new Date(y.released || y.createdAt) -
		new Date(x.released || x.createdDate)
	);
});

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

const CellWrapper = styled.div`${bpEach("width", widths)};`;

const CellInner = styled.div`padding: 1em 0.5em;`;

const Image = styled.div`
	${R.pipe(R.path(["image", "url"]))}
	background-color: #f8f8f8;
	background-image: url("http://${R.pipe(
		R.path(["image", "url"]),
		R.append(R.__, [
			"res.cloudinary.com",
			"codogo",
			"image",
			"fetch",
			"h_500,c_fill,g_face,f_auto",
			"https:",
		]),
		R.join("/"),
	)}");
	background-size: cover;
	background-position: center center;
	padding-top: 60%;
`;

const Text = styled.div`
	margin-top: 1em;
	text-align: center;
`;

const Subtext = styled.div`
	margin-top: 0.5em;
	font-size: 0.8em;
	text-align: center;
	opacity: 0.7;
`;

const Cell = ({ image, title, slug, productionType, role, released }) => (
	<CellWrapper>
		<Link to={"/credit/" + slug}>
			<CellInner>
				<Image image={image} />

				<Text>{title}</Text>

				<Subtext>
					{`${role || "Casting Director"}  -  `}
					{Moment(released).isBefore(new Date())
						? Moment(released).format("YYYY")
						: "Coming Soon"}
				</Subtext>
			</CellInner>
		</Link>
	</CellWrapper>
);

const creditsListText = creditsList.reduce(
	(acc, { title }) => `${acc}\n${title}`,
	"",
);
const description = `Credits:\n${creditsListText}`;

// --------------------------------------------------

const ViewSelectors = styled.div`
	display: flex;
	flex-direction: row;
	padding: 30px 30px 0;
	width: 100%;
`;

const ViewSelectorButton = styled(Button)`
	cursor: pointer;
	margin: 0 0.3em;

	${({ active }) =>
		active && ` background-color: rgba(0,0,0,0.5); color: white; `};
`;

const SeeAllButton = styled.div`
	text-align: right;
	flex: 1;
`;

// --------------------------------------------------

const CreditsGrid = ({ creditsList }) => (
	<Container>
		{creditsList
			.filter(R.prop("image"))
			.map(o => <Cell key={o.slug} {...o} />)}
	</Container>
);

// --------------------------------------------------

const Table = styled.table`
	margin: auto;
	border-collapse: collapse;
`;

const TableHeader = styled.thead`
	font-weight: bold;
	border-bottom: 1px solid ${colors.text};
`;

const TableRow = styled.tr`
	border-bottom: 1px solid ${colors.lines};
	cursor: pointer;

	&:hover {
		background-color: ${colors.grey};
		border-bottom: none;
	}
`;

const TableCell = styled.td`
	a {
		display: block;
	}
`;

const CreditsTable = ({ creditsList }) => (
	<Container>
		<Table>
			<TableHeader>
				<TableCell>Name</TableCell>
				<TableCell>Type</TableCell>
				<TableCell>Released</TableCell>
			</TableHeader>
			{creditsList.map(
				({
					slug,
					title,
					productionType,
					released,
					html,
					...credit
				}) => (
					<TableRow key={slug}>
						<TableCell>
							<Link to={"/credit/" + slug}>{title}</Link>
						</TableCell>
						<TableCell>
							<Link to={"/credit/" + slug}>{productionType}</Link>
						</TableCell>
						<TableCell>
							<Link to={"/credit/" + slug}>
								{released &&
									(Moment(released).isBefore(new Date())
										? Moment(released).format("YYYY")
										: "Coming Soon")}
							</Link>
						</TableCell>
					</TableRow>
				),
			)}
		</Table>
	</Container>
);

// --------------------------------------------------

export default class Credits extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			view: "grid",
			filter: "featured",
		};
	}

	clickSeeAll = () =>
		this.setState({
			view: "table",
			filter: "",
		});

	render() {
		console.log(this.state);
		return (
			<div>
				<Head title="Credits" description={description} />
				<Banner>Credits</Banner>

				<ViewSelectors>
					<ViewSelectorButton
						active={this.state.filter === "featured"}
					>
						Featured
					</ViewSelectorButton>
					<ViewSelectorButton>Film</ViewSelectorButton>
					<ViewSelectorButton>Short</ViewSelectorButton>
					<ViewSelectorButton>Theatre</ViewSelectorButton>

					<SeeAllButton>
						<Button onClick={this.clickSeeAll}>See All</Button>
					</SeeAllButton>
				</ViewSelectors>

				{this.state.view === "table" ? (
					<CreditsTable creditsList={creditsList} />
				) : (
					<CreditsGrid creditsList={creditsList} />
				)}
			</div>
		);
	}
}
