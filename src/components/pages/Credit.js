import Moment from "moment";

import Vimeo from "react-vimeo";
import parseUrl from "url-parse";

import Generic from "./Generic";
import { HtmlContent, VimeoWrapper, } from "src/components/common";

import data from "src/data";

import YouTube from 'react-youtube';

// --------------------------------------------------

export default credit => (
	<Generic src = { credit.image && credit.image.url } title = { credit.title }>
		{ R.contains("vimeo", credit.videoUrl) &&
			<VimeoWrapper>
				<Vimeo videoId = { parseUrl(credit.videoUrl, true).pathname.split("/")[1] } />
			</VimeoWrapper>
		}

		{ R.contains("youtube", credit.videoUrl) &&
			<YouTube
  				videoId = { parseUrl(credit.videoUrl, true).query.v }
  			/>
		}

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
