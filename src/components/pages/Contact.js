import Generic from "./Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default () => (
	<Generic title = "Get in touch" src = { data.contactPage.image.url }>
		<HtmlContent>
			{ data.contactPage.html }
		</HtmlContent>

		<h2>Social Media</h2>

		<p><a href = { data.siteSettings.imdb }>IMDB</a></p>

		<p><a href = { data.siteSettings.linkedIn }>LinkedIn</a></p>

		<p><a href = { data.siteSettings.facebook }>Facebook</a></p>

		<p><a href = { data.siteSettings.vimeo }>Vimeo</a></p>
	</Generic>
);