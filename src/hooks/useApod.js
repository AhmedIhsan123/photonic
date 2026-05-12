import { useState, useEffect } from "react";

export function useApod() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const key = import.meta.env.VITE_NASA_API_KEY;

	useEffect(() => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=2024-11-12`)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []); // empty array = runs once on mount

	return { data, loading, error };
}
