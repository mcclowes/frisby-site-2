import Generic from "./Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default () => (
	<Generic title = "Get in touch">
		<HtmlContent>{ data.contactPage.html }</HtmlContent>
	</Generic>
);