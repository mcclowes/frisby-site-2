import Generic from "./Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default () => (
	<Generic>
		<HtmlContent>{ data.aboutPage.html }</HtmlContent>
	</Generic>
);