import NasaImage from "./NasaImage.jsx";
export default function Item({ data }) {
	console.log(data);
	return (
		<>
			<NasaImage url={data.url} />
		</>
	);
}
