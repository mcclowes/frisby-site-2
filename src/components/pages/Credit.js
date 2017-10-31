import Generic from "./Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default ({ html, title, }) => (
	<Generic>
		<h1>{ title }</h1>
		<HtmlContent>{ html }</HtmlContent>
	</Generic>
);