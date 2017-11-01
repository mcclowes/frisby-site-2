import Generic from "./Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default ({ html, title, image, }) => (
	<Generic src = { image && image.url } title = { title }>
		<HtmlContent>{ html }</HtmlContent>
	</Generic>
);