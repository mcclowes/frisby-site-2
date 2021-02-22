import styled from "styled-components";
import { Banner, Container, GridCell, TextCell } from "src/components/common";

import * as mixins from "codogo-utility-functions";

import data from "src/data";
import * as vars from "src/components/style/vars";
import Head from "src/components/common/Head";

const MaxWidthTextCell = styled(TextCell)`
  max-width: 50em;
  margin: 0 auto;
`;

const clFetch = (src) =>
  `https://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${src}`;

const Generic = ({ children, title, src, description }) => (
  <div>
    <Head image={src} title={title} description={description} />

    <Banner src={clFetch(src)}>{title}</Banner>

    <GridCell>
      <MaxWidthTextCell>{children}</MaxWidthTextCell>
    </GridCell>
  </div>
);

export default Generic;
