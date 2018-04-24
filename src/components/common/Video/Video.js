import { parseVideoUrl, parseVideoThumbnail, } from "src/components/common/Video/parseVideoUrl";

import { VimeoWrapper, } from "src/components/common/Video/VimeoWrapper";

import styled from "styled-components";
import Vimeo from "react-vimeo";
import YouTube from "react-youtube";

// --------------------------------------------------

const Image = styled.div`
	background-color: #f8f8f8;
	background-image: url("http://${ R.pipe(
		R.path([ "image", "url", ]),
		R.append(R.__, [
			"res.cloudinary.com",
			"codogo",
			"image",
			"fetch",
			"h_500,c_fill,g_face,f_auto",
			"https:",
		]),
		R.join("/"),
	) }");
	background-size: cover;
	background-position: center center;
	padding-top: 60%;
`;

// --------------------------------------------------

export const Video = ({ videoUrl, }) => {
	const video = parseVideoUrl(videoUrl);

	return video.platform === "vimeo" ? 
		(
			<VimeoWrapper>
				<Vimeo
					videoId = { video.id }
				/>
			</VimeoWrapper>
		)
		: <YouTube videoId = { video.id } />
};