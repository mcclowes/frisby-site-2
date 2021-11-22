import * as mixins from "codogo-utility-functions";

import {
  Banner,
  Button,
  GridCell,
  parseVideoThumbnail,
} from "src/components/common";
import { Link } from "react-router-dom";
import { colors } from "src/components/style/vars";

import Head from "src/components/common/Head";
import Moment from "moment";

import data from "src/data";
import styled from "styled-components";

const creditsList = data.credits;
creditsList.sort((x, y) =>
  y.released || x.released
    ? new Date(y.released || 0) - new Date(x.released || 0)
    : new Date(y.createdAt) - new Date(x.createdAt)
);

const creditsProductionList = data.credits;
creditsProductionList.sort((x, y) =>
  y.released || x.released
    ? new Date(y.released || 0) - new Date(x.released || 0)
    : new Date(y.createdAt) - new Date(x.createdAt)
);

const Container = styled(GridCell)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const widths = R.map((n) => `${100 / n}%`)({
  xs: 1,
  sm: 3,
  md: 4,
  lg: 5,
});

const CellWrapper = styled.div`
  ${mixins.bpEach("width", widths)};
`;

const CellInner = styled.div`
  padding: 1em 0.5em;
`;

const Image = styled.div`
  background-color: #f8f8f8;
  background-image: url("https://${R.pipe(
    R.path(["image"]),
    R.append(R.__, [
      "res.cloudinary.com",
      "codogo",
      "image",
      "fetch",
      "h_500,c_fill,g_face,f_auto",
      "https:",
    ]),
    R.join("/"),
    R.split("///"),
    R.join("//")
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

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { videoUrl } = this.props;

    videoUrl &&
      parseVideoThumbnail(videoUrl, (thumbnailUrl) =>
        this.setState({
          thumbnailUrl,
        })
      );
  }

  render() {
    const { image, title, slug, released } = this.props;

    return (
      <CellWrapper>
        <Link to={"/credit/" + slug}>
          <CellInner>
            <Image image={(image && image.url) || this.state.thumbnailUrl} />

            <Text>{title}</Text>

            <Subtext>
              {Moment(released).isBefore(new Date())
                ? Moment(released).format("YYYY")
                : "Coming Soon"}
            </Subtext>
          </CellInner>
        </Link>
      </CellWrapper>
    );
  }
}

const creditsListText = creditsList.reduce(
  (acc, { title }) => `${acc}\n${title}`,
  ""
);
const description = `Credits:\n${creditsListText}`;

const ViewSelectors = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 30px 0;
  width: 100%;
  flex-wrap: wrap;
`;

const ViewSelectorButton = styled(Button)`
  cursor: pointer;
  margin: 0 0.3em;

  ${({ active }) =>
    active && " background-color: rgba(0,0,0,0.5); color: white; "};
`;

const SeeAllButton = styled.div`
  text-align: right;
  flex: 1;
`;

const CreditsGrid = ({ creditsList }) => (
  <Container>
    {creditsList.map((o) => (
      <Cell key={o.slug} {...o} />
    ))}
  </Container>
);

const Table = styled.table`
  margin: auto;
  border-collapse: collapse;
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
  padding: 0.2em 0.5em;

  a {
    display: block;
  }
`;

const TableHeader = styled(TableCell)`
  font-weight: bold;
  border-bottom: 1px solid ${colors.text};
`;

const CreditsTableWrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

const CreditsTable = ({ creditsList, filter, title }) => (
  <CreditsTableWrapper>
    <h2>{title}</h2>

    <Table>
      <tbody>
        <TableRow>
          <TableHeader>Name</TableHeader>

          <TableHeader>Type</TableHeader>

          <TableHeader>Released</TableHeader>
        </TableRow>

        {creditsList
          .filter(({ productionType = "" }) =>
            productionType.toLowerCase().includes(filter)
          )
          .map(({ slug, title, productionType, released, html, ...credit }) => (
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
          ))}
      </tbody>
    </Table>

    <br />
    {filter.toLowerCase() === "commercial" && <div>...and hundreds more!</div>}
  </CreditsTableWrapper>
);

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

  clickFeatured = () =>
    this.setState({
      view: "grid",
      filter: "featured",
    });

  clickFilm = () =>
    this.setState({
      view: "grid",
      filter: "film",
    });

  clickShort = () =>
    this.setState({
      view: "grid",
      filter: "short",
    });

  clickTheatre = () =>
    this.setState({
      view: "grid",
      filter: "theatre",
    });

  clickCommercial = () =>
    this.setState({
      view: "grid",
      filter: "commercial",
    });

  render() {
    return (
      <div>
        <Head title="Credits" description={description} />

        <Banner>Credits</Banner>

        <ViewSelectors>
          <ViewSelectorButton
            active={this.state.filter === "featured"}
            onClick={this.clickFeatured}
          >
            All
          </ViewSelectorButton>

          <ViewSelectorButton
            active={this.state.filter === "theatre"}
            onClick={this.clickTheatre}
          >
            Theatre
          </ViewSelectorButton>

          <ViewSelectorButton
            active={this.state.filter === "commercial"}
            onClick={this.clickCommercial}
          >
            Commercials
          </ViewSelectorButton>

          <ViewSelectorButton
            active={this.state.filter === "film"}
            onClick={this.clickFilm}
          >
            Features
          </ViewSelectorButton>

          <ViewSelectorButton
            active={this.state.filter === "short"}
            onClick={this.clickShort}
          >
            Shorts
          </ViewSelectorButton>

          <SeeAllButton>
            <Button
              active={this.state.view === "table"}
              onClick={this.clickSeeAll}
            >
              View CV
            </Button>
          </SeeAllButton>
        </ViewSelectors>

        {this.state.view === "table" ? (
          <div>
            <CreditsTable
              creditsList={creditsList}
              title="Theatre"
              filter="theatre"
            />

            <CreditsTable
              creditsList={creditsList}
              title="Commercials"
              filter="commercial"
            />

            <CreditsTable
              creditsList={creditsList}
              title="Films"
              filter="film"
            />

            <CreditsTable
              creditsList={creditsList}
              title="Shorts"
              filter="short"
            />

            {/*<CreditsTable creditsList = { creditsList } title = "NFTS Shorts" filter = "nfts" />*/}

            <CreditsTable
              creditsList={creditsList}
              title="Television"
              filter="television"
            />
          </div>
        ) : (
          <CreditsGrid
            creditsList={creditsList.filter(({ productionType = "" }) =>
              this.state.filter === "featured"
                ? true
                : productionType.toLowerCase().includes(this.state.filter)
            )}
          />
        )}
      </div>
    );
  }
}
