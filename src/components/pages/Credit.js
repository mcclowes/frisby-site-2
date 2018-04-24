import { HtmlContent, Video, parseVideoThumbnail, } from "src/components/common";


import Generic from "src/components/pages/Generic";
import Moment from "moment";

// --------------------------------------------------

export default class Credit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			thumbnailUrl: null,
		};
	}

	setThumbnailUrl = url => {
		console.log("URL", url),
		this.setState({
			thumbnailUrl: url,
		});
	};

	componentDidMount() {
		this.props.image && this.setThumbnailUrl(this.props.image.url);
  		parseVideoThumbnail(this.props.videoUrl, this.setThumbnailUrl);
  	}

  	render() {
  		const {
			image,
			videoUrl,
			title,
			release,
			productionType,
			homepage,
			html,
		} = this.props;

		const {
			thumbnailUrl,
		} = this.state;

  		return (
			<Generic 
				src = { thumbnailUrl } 
				title = { title }
			>
				{ videoUrl && <Video videoUrl = { videoUrl } /> }

				<p>
					<b>Title:</b> {title}
					<br />
					<b>Date:</b> {Moment(release).format("YYYY")}
					<br />
					<b>Type:</b> {productionType}
					<br />
				</p>

				{homepage && (
					<p>
						<a href = { homepage }>{`Visit ${
							title
						}'s homepage`}</a>
					</p>
				)}

				<HtmlContent>{html}</HtmlContent>
			</Generic>
		)
  	}
}

