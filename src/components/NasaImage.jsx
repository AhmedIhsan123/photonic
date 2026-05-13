import "../styles/NasaImage.css";

// renders just the image for a single apod item
export default function NasaImage({ url, title, mediaType }) {
	// some apod entries are videos instead of images
	if (mediaType === "video") {
		return (
			<div className="nasa-image nasa-image--video">
				<iframe
					src={url}
					title={title}
					allowFullScreen
					className="nasa-iframe"
				/>
				<span className="nasa-video-badge">Video</span>
			</div>
		);
	}

	return (
		<div className="nasa-image">
			<img src={url} alt={title} className="nasa-img" />
		</div>
	);
}
