import styled from "styled-components";
import { GridCell, Container, TextCell, } from "src/components/common";

// --------------------------------------------------

const MaxWidthTextCell = styled(TextCell)`
	max-width: 50em;
	margin: 0 auto;
`;

const Generic = ({ children, }) => (
	<GridCell>
		<MaxWidthTextCell>
			{ children }
		</MaxWidthTextCell>
	</GridCell>
);

export default Generic;