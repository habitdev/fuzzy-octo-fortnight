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
				<section className="emotion-section">
					<div className="container">
						<div className="emotion-txt-wrap">
							<div className="emotion-words">
								<p className="emotion-txt">
									Some <strong>feelings</strong> can’t be explained.
								</p>
								<p className="emotion-txt space">
									But they can be <strong>heard</strong>.
								</p>
								<p className="emotion-txt">
									We help you <strong>hear</strong> yours.
								</p>
							</div>
						</div>

						<div className="about-circles-wrap">
							<ul className="about-circles">
								<li className="about-circles__item">
									<div className="circle">
										<figure className="circle-obj">
											<img src="/assets/bg_circle_obj_happy.png" alt="" />
											<figcaption className="circle-txt">Happy</figcaption>
										</figure>
									</div>
								</li>
								<li className="about-circles__item">
									<div className="circle">
										<figure className="circle-obj">
											<img src="/assets/bg_circle_obj_calm.png" alt="" />
											<figcaption className="circle-txt">Calm</figcaption>
										</figure>
									</div>
								</li>
								<li className="about-circles__item">
									<div className="circle">
										<figure className="circle-obj">
											<img src="/assets/bg_circle_obj_focus.png" alt="" />
											<figcaption className="circle-txt">Focus</figcaption>
										</figure>
									</div>
								</li>
								<li className="about-circles__item">
									<div className="circle">
										<figure className="circle-obj">
											<img src="/assets/bg_circle_obj_sad.png" alt="" />
											<figcaption className="circle-txt">Sad</figcaption>
										</figure>
									</div>
								</li>
								<li className="about-circles__item">
									<div className="circle">
										<figure className="circle-obj">
											<img src="/assets/bg_circle_obj_lonely.png" alt="" />
											<figcaption className="circle-txt">Lonely</figcaption>
										</figure>
									</div>
								</li>
								<li className="about-circles__item">
									<div className="circle">
										<figure className="circle-obj">
											<img src="/assets/bg_circle_obj_dreamy.png" alt="" />
											<figcaption className="circle-txt">Dreamy</figcaption>
										</figure>
									</div>
								</li>
							</ul>
						</div>
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
