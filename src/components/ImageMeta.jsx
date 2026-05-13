import "../styles/ImageMeta.css";

// renders the title, date, and optional copyright below the image
export default function ImageMeta({ title, date, copyright }) {
	return (
		<div className="image-meta">
			<h2 className="meta-title">{title}</h2>
			<div className="meta-row">
				<span className="meta-date">{date}</span>
				{copyright && (
					<>
						<span className="meta-dot">·</span>
						<span className="meta-copyright">© {copyright.trim()}</span>
					</>
				)}
			</div>
		</div>
	);
}
