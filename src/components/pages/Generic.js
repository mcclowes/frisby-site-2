import styled from "styled-components";
import { GridCell, Container, TextCell, Banner, } from "src/components/common";

import data from "src/data";
import * as vars from "src/components/style/vars";
import * as mixins from "src/components/style/mixins";
import Head from "src/components/common/Head";
import { childrenToText, } from "src/lib/util";

// --------------------------------------------------

const MaxWidthTextCell = styled(TextCell)`
	max-width: 50em;
	margin: 0 auto;
`;

const clFetch = src => `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ src }`

const Generic = ({ children, title, src, description, }) => (
	<div>
		<Head image = { src } title = { title } description = { description || childrenToText(children) } />
		<Banner src = { clFetch(src) }>
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