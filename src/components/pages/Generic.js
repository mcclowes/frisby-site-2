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
		<Banner src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ src }` }>
			{ title }
		</Banner>

		<GridCell>
			<MaxWidthTextCell>
				{ children }
			</MaxWidthTextCell>
		</GridCell>
	</div>
);

export default Generic;