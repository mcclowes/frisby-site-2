import Generic from "./Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default () => (
	<Generic title = "About Jane" src = { data.aboutPage.image.url }>
		<HtmlContent>{ data.aboutPage.html }</HtmlContent>
	</Generic>
);