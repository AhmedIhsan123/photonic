// import NasaImage from "./NasaImage.jsx";
// import ImageDate from "./ImageDate.jsx";
import "../styles/Item.css";
export default function Item({ data }) {
	return (
		<div className="item">
			<img src={data.url} width={300} />
			<p className="item-date">{data.date}</p>
		</div>
	);
}
