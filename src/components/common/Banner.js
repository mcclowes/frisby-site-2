import styled from "styled-components";

import * as mixins from "codogo-utility-functions";

import * as vars from "src/components/style/vars";
import data from "src/data";
import { GridCell } from "src/components/common/misc";

const BannerWrapper = styled(GridCell)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.src || data.homePage.hero.url});
  background-size: cover;
  background-position: center center;
  height: 18em;
  ${mixins.bpEither("padding-top", vars.dim.nav.height)} display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled(GridCell)`
  color: white;
  font-size: 3em;
  font-family: ${vars.font.title.family};
  margin-top: -1em;
`;

export const Banner = ({ children, src }) => (
  <BannerWrapper src={src}>
    <BannerText>{children}</BannerText>
  </BannerWrapper>
);
