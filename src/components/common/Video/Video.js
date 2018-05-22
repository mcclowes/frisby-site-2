import { Player as ReactVideo, } from "video-react";
import { ReactVideoWrapper, } from "src/components/common/Video/ReactVideoWrapper";
import { VimeoWrapper, } from "src/components/common/Video/VimeoWrapper";

import { parseVideoUrl, } from "src/components/common/Video/parseVideoUrl";

import Vimeo from "react-vimeo";
import YouTube from "react-youtube";

// --------------------------------------------------

// --------------------------------------------------

export const Video = ({ videoUrl, video, }) => {
	const parsedVideoUrl = videoUrl ? parseVideoUrl(videoUrl) : undefined;

	if (videoUrl && parsedVideoUrl) {
		return parsedVideoUrl.platform === "vimeo" ? (
			<VimeoWrapper>
				<Vimeo videoId = { parsedVideoUrl.id } />
			</VimeoWrapper>
		) : (
			<YouTube videoId = { parsedVideoUrl.id } />
		);
	} else {
		return (
			<ReactVideoWrapper>
				<ReactVideo playsInline src = { video.fields.file.url } />
			</ReactVideoWrapper>
		);
	}
};
