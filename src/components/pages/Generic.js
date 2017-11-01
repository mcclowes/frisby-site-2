import styled from "styled-components";
import { GridCell, Container, TextCell, Banner, } from "src/components/common";

import data from "src/data";
import * as vars from "src/components/style/vars";
import * as mixins from "src/components/style/mixins";

// --------------------------------------------------

const MaxWidthTextCell = styled(TextCell)`
	max-width: 50em;
	margin: 0 auto;
`;

const Generic = ({ children, title, src, }) => (
	<div>
		<Banner src = { src }>{ title }</Banner>
		<GridCell>
			<MaxWidthTextCell>
				{ children }
			</MaxWidthTextCell>
		</GridCell>
	</div>
);

export default Generic;