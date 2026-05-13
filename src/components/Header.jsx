import "../styles/Header.css";

export default function Header() {
	return (
		<header className="site-header">
			<div className="header-inner">
				<span className="header-logo">✦</span>
				<div className="header-text">
					<h1 className="header-title">Photonic</h1>
					<p className="header-sub">NASA Astronomy Picture of the Day</p>
				</div>
			</div>
		</header>
	);
}
