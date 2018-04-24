import parseUrl from "url-parse";
import XmlReader from 'xml-reader';

export const parseVideoUrl = ( videoUrl, ) => {
	return R.contains("vimeo", videoUrl) ? 
		{
			platform: "vimeo", 
			id: parseUrl(videoUrl, true).pathname.split("/")[1],
		}
		: {
			platform: "youtube", 
			id: parseUrl(videoUrl, true).query.v,
		};
};

const parseVimeoThumbnail = ( videoId, callback, ) => {
	const reader = XmlReader.create();
	
	fetch(`http://vimeo.com/api/v2/video/${ videoId }.xml`)
		.then(response => response.text() )
		.then( ( response ) => {
			console.log("rggggg", response);
			reader.on("tag:thumbnail_large", (data) => data.children[0].value.split("//")[1] );
		})
		.then( x => console.log("hmmm", x) );
};

const parseYouTubeThumbnail = ( videoId, callback, ) => {
	callback(`//img.youtube.com/vi/${ videoId }/2.jpg`);
};


export const parseVideoThumbnail = ( videoUrl, callback, ) => {
	const video = parseVideoUrl(videoUrl);

	video.platform === "vimeo" ? parseVimeoThumbnail(video.id, callback) : parseYouTubeThumbnail(video.id, callback);
};