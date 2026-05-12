import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useApod } from "./hooks/useApod";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Item from "./components/Item";
// import "./App.css";

export default function App() {
	const [startDate, setStartDate] = useState("2024-01-01");
	const [endDate, setEndDate] = useState("2024-01-07");
	const [search, setSearch] = useState({ startDate, endDate });
	const { data, loading, error } = useApod(search.startDate, search.endDate);

	return (
		<>
			<Header />
			<input
				type="date"
				value={startDate}
				min="1996-01-01"
				max={new Date().toISOString().split("T")[0]}
				onChange={(e) => setStartDate(e.target.value)}
			/>
			<input
				type="date"
				value={endDate}
				min="1996-01-01"
				max={new Date().toISOString().split("T")[0]}
				onChange={(e) => setEndDate(e.target.value)}
			/>
			<button onClick={() => setSearch({ startDate, endDate })}>Search</button>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{data?.map((item) => (
				<Item key={item.date} data={item} />
			))}
			<Footer />
		</>
	);
}
