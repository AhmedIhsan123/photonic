import { useState, useEffect } from "react";

export function useApod() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const key = import.meta.env.VITE_NASA_API_KEY;

	useEffect(() => {
		async function fetchApod() {
			const query = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=2024-11-12`;
			const res = await fetch(query).catch((err) => setError(err.message));
			const json = await res.json().catch((err) => setError(err.message));
			setData(json);
			setLoading(false);
		}

		fetchApod();
	}, []); // empty array = runs once on mount

	return { data, loading, error };
}
