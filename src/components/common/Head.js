import Helmet from "react-helmet";
import { withRouter, } from "react-router";

import * as vars from "../style/vars";

import data from "src/data";

// --------------------------------------------------

const { sitePic, siteName, siteDescription, } = data.siteSettings;

const siteUrl = "http://frisby.netlify.com";

// --------------------------------------------------

const Head = ({
	image: _image = sitePic.url,
	title: _title,
	description = siteDescription,
	match,
}) => {
	const url = siteUrl + match.url;

	const title = _title
		? `${ _title } | ${ siteName }`
		: `${ siteName } | ${ siteDescription }`;

	const image =
		_image && (_image.includes("http") ? _image : "https:" + _image);

	return (
		<Helmet>
			<meta charSet = "utf-8" />
			<meta http-equiv = "X-UA-Compatible" content = "IE=edge" />
			<meta
				name = "viewport"
				content = "width=device-width, initial-scale=1"
			/>

			<link rel = "canonical" href = { url } />
			<title>{title}</title>
			<meta name = "description" content = { description } />

			<meta property = "og:url" content = { url } />
			<meta property = "og:type" content = "website" />
			<meta property = "og:title" content = { title } />
			<meta property = "og:site_name" content = { siteName } />
			<meta property = "og:description" content = { description } />

			{/*Social */}
			{/*General image*/}
			<link rel = "image_src" type = "image/jpeg" href = { image } />

			{/*180x110 Image for Linkedin */}
			<meta property = "og:image" content = { image } />
			<meta property = "og:image:width" content = "180" />
			<meta property = "og:image:height" content = "110" />

			{/*600x315 Image for Facebook */}
			<meta property = "og:image" content = { image } />
			<meta property = "og:image:width" content = "600" />
			<meta property = "og:image:height" content = "315" />

			{/*Twitter Card */}
			<meta name = "twitter:card" content = "summary_large_image" />
			<meta name = "twitter:title" content = { _title || siteName } />
			<meta name = "twitter:url" content = { url } />
			<meta name = "twitter:description" content = { description } />
			<meta name = "twitter:image:src" content = { image } />

			{/*Analytics */}
			{/*Search Console */}
			<meta
				name = "google-site-verification"
				content = { vars.meta.googleSearch }
			/>
		</Helmet>
	);
};

export default withRouter(Head);
