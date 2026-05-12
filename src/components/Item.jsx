import NasaImage from "./NasaImage.jsx";
import ImageDate from "./ImageDate.jsx";
export default function Item({ data }) {
	console.log(data);
	return (
		<>
			<NasaImage url={data.url} />
			<ImageDate date={data.date} />
		</>
	);
}
