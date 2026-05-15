import { useState, useEffect } from "react";

export function useApod(startDate, endDate) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const key = import.meta.env.VITE_NASA_API_KEY;

	useEffect(() => {
		// Reset state at the start of every fetch
		setData(null);
		setLoading(true);
		setError(null);

		async function fetchApod() {
			try {
				const query = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${endDate}`;
				const res = await fetch(query);
				if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
				const json = await res.json();
				setData(json);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchApod();
	}, [startDate, endDate]);

	return { data, loading, error };
}
