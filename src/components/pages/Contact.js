import Generic from "src/components/pages/Generic";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default () => (
	<Generic title = "Get in touch" src = { data.contactPage.image.url }>
		<HtmlContent>{data.contactPage.html}</HtmlContent>

		<h2>Follow Jane</h2>

		<p>
			<a href = { data.siteSettings.imdb }>IMDB</a>
			<br />

			<a href = { data.siteSettings.curtainCall }>Curtain Call</a>
			<br />

			<a href = { data.siteSettings.linkedIn }>LinkedIn</a>
			<br />

			<a href = { data.siteSettings.facebook }>Facebook</a>
			<br />

			<a href = { data.siteSettings.vimeo }>Vimeo</a>
			<br />
		</p>
	</Generic>
);
