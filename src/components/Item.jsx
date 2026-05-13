import { useState } from "react";
import NasaImage from "./NasaImage.jsx";
import ImageMeta from "./ImageMeta.jsx";
import "../styles/Item.css";

export default function Item({ data }) {
	// tracks if the modal is open
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div className="item">
				{/* image */}
				<NasaImage
					url={data.url}
					title={data.title}
					mediaType={data.media_type}
				/>

				{/* title, date, copyright */}
				<ImageMeta
					title={data.title}
					date={data.date}
					copyright={data.copyright}
				/>

				{/* read more button */}
				<div className="item-footer">
					<button
						className="item-desc-btn"
						onClick={() => setModalOpen(true)}
					>
						Read Description
					</button>
				</div>
			</div>

			{/* modal */}
			{modalOpen && (
				<div
					className="modal-overlay"
					onClick={() => setModalOpen(false)}
				>
					<div
						className="modal-box"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="modal-header">
							<h2 className="modal-title">{data.title}</h2>
							<button
								className="modal-close"
								onClick={() => setModalOpen(false)}
							>
								✕
							</button>
						</div>
						<p className="modal-date">{data.date}</p>
						<p className="modal-body">{data.explanation}</p>
					</div>
				</div>
			)}
		</>
	);
}
