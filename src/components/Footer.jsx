import "../styles/Footer.css";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<p className="footer-credit">
					Images &amp; data courtesy of{" "}
					<a
						href="https://apod.nasa.gov/apod/astropix.html"
						target="_blank"
						rel="noreferrer"
					>
						NASA APOD
					</a>
				</p>
				<span className="footer-divider">✦</span>
				<p className="footer-copy">&copy; {year} Photonic</p>
			</div>
		</footer>
	);
}
