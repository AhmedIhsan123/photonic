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
	const { data, loading, error } = useApod();

	return (
		<>
			<Header />
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{data && <Item data={data} />}
			<Footer />
		</>
	);
}
