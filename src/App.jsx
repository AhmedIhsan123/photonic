import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useApod } from "./hooks/useApod";
// import "./App.css";

export default function App() {
	const { data, loading, error } = useApod();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (data) return <img src={data.url} alt={data.title} />;
}
