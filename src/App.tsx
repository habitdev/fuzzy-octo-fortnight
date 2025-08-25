import './App.css';

function App() {
	return (
		<>
			<main className="main">
				<section className="visual-section">
					<div className="hero-tit">
						<p className="hero-tit__row">
							<span>Your Mood,</span>
						</p>
						<p className="hero-tit__row">
							<span>Your Music.</span>
						</p>
					</div>

					<div className="hero-spot">
						<figure className="hero-spot__mask">
							<span className="mask-bg">
								<img src="/assets/img_hero.jpg" alt="cloud" />
							</span>
						</figure>
					</div>
				</section>
				
			</main>
			<footer id="footer">
				<div className="container"></div>
			</footer>
		</>
	);
}

export default App;
