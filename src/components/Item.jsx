import NasaImage from "./NasaImage.jsx";
import ImageDate from "./ImageDate.jsx";
import "../styles/Item.css";
export default function Item({ data }) {
	return (
		<div className="item">
			<NasaImage url={data.url} />
			<ImageDate date={data.date} />
		</div>
	);
}
