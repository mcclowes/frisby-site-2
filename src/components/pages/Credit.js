import Generic from "./Generic";

import Moment from "moment";

import { HtmlContent, } from "src/components/common";
import data from "src/data";

// --------------------------------------------------

export default credit => (
	<Generic src = { credit.image && credit.image.url } title = { credit.title }>
		<p>
			<b>Title:</b> {credit.title}
			<br />
			<b>Date:</b> {Moment(credit.release).format("YYYY")}
			<br />
			<b>Type:</b> {credit.productionType}
			<br />
		</p>

		{credit.homepage && (
			<p>
				<a href = { credit.homepage }>{`Visit ${
					credit.title
				}'s homepage`}</a>
			</p>
		)}

		<HtmlContent>{credit.html}</HtmlContent>
	</Generic>
);
