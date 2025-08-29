import { Link } from 'react-router-dom';
import {
	AboutBg,
	AboutSection,
	AboutText,
	AboutWordItem,
	AboutWords,
	BgImage,
	BgList,
	BtnLink,
	Circle,
	CircleImage,
	CircleObj,
	CircleTxt,
	Container,
	EmotionCircles,
	EmotionCirclesItem,
	EmotionCirclesWrap,
	EmotionCirclesWrapInner,
	EmotionSection,
	EmotionText,
	EmotionTextWrap,
	EmotionWords,
	Footer,
	HeroMask,
	HeroSection,
	HeroSectionAll,
	HeroSpot,
	HeroTitle,
	HeroTitleRow,
	HeroTitleWrap,
	HeroWrap,
	Main,
	MaskBg,
	MaskImage,
	WaveCircle,
	WaveCircles,
	WaveCircleWrap,
	WaveTit,
	WaveTitWrap,
	WaveWrap,
	WaveWrapInner,
} from './App.styled';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

function App() {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	const heroRef = useRef<HTMLElement | null>(null);
	const heroBgWrapRef = useRef(null);
	const heroBgRef = useRef(null);
	const heroSectionRef = useRef<HTMLElement | null>(null);
	const heroAllRef = useRef<HTMLDivElement | null>(null);
	const heroTitWrapRef = useRef(null);
	const heroTitRef = useRef(null);
	const waveSectionRef = useRef<HTMLElement | null>(null);
	const waveTitWrapRef = useRef(null);
	const waveTitRef = useRef(null);
	const rippleRef = useRef(null);
	const emotionSectionRef = useRef(null);
	const emotionRef = useRef(null);
	const emotionCirclesRef = useRef(null);
	const aboutRef = useRef(null);
	const footerRef = useRef(null);

	useEffect(() => {
		// Hero clip-path

		const gsapContext = gsap.context(() => {
			// ScrollTrigger.create({
			// 	trigger: heroSectionRef.current,
			// 	start: 'top top',
			// 	end: `bottom bottom`,
			// 	pin: true,
			// 	// markers: true
			// });

			ScrollTrigger.defaults({
				// markers: true,
				// fast scroll에서 문제 추적
			});

			gsap.to(heroBgRef.current, {
				id: 'hero-bg',
				clipPath: 'inset(-20% -30%)',
				opacity: 0,
				scrollTrigger: {
					trigger: heroBgWrapRef.current,
					start: 'top top',
					end: `center top`,
					scrub: true,
					// markers: true,
				},
			});

			gsap.to(heroTitRef.current, {
				id: 'hero-tit',
				opacity: 0,
				y: -30,
				scrollTrigger: {
					trigger: heroBgWrapRef.current,
					start: 'center+=10% top',
					end: 'center+=10% top',
					toggleActions: 'play none reverse none',
					// markers: true,
				},
			});

			// gsap.to(waveTitRef.current, {
			// 	id: 'wave-tit',
			// 	opacity: 1,
			// 	y: 0,
			// 	duration: 0.5,
			// 	scrollTrigger: {
			// 		trigger: waveTitWrapRef.current,
			// 		start: 'center top',
			// 		end: `center top`,
			// 		// toggleActions: 'play none reverse none',
			// 		// markers: true,
			// 	},
			// });

			ScrollTrigger.create({
				trigger: waveSectionRef.current,
				start: 'top top',
				end: 'bottom top',
				pin: true,
				pinSpacing: false,
				// markers: true,
			});

			const circleSelector = gsap.utils.selector(rippleRef);
			const circles = circleSelector('.circle');

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: waveSectionRef.current,
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
					// markers: true,
				},
			});

			gsap.fromTo(
				waveTitRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'sine.out',
					scrollTrigger: {
						id: 'tit-fadeup',
						trigger: rippleRef.current,
						start: 'top top',
						end: 'top top',
						toggleActions: 'play none reverse none',
						// markers: true,
						scrub: false,
					},
				}
			);

			gsap.to(waveTitWrapRef.current, {
				opacity: 0,
				scrollTrigger: {
					id: 'tit-opacity',
					trigger: emotionSectionRef.current,
					start: 'top bottom',
					end: 'top center',
					scrub: true,
					// markers: true,
				},
			});

			circles.forEach((circle, index) => {
				tl.fromTo(
					circle,
					{
						scale: 0,
						opacity: 0,
					},
					{
						scale: 8,
						opacity: 0,
						duration: 1.5,
						ease: 'power1.out',
						keyframes: [
							{ opacity: 1, duration: 0.2 },
							{ opacity: 0, duration: 0.5 },
						],
					},
					index * 0.5
				);
			});
		});

		const emotionTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: emotionRef.current,
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: true,
				id: 'st-emotion',
				// markers: true,
			},
		});

		const emotionSelector = gsap.utils.selector(emotionCirclesRef);
		const firstEmotionCircle = emotionSelector('.item')[0];
		const innerDiv = firstEmotionCircle.querySelector('div');

		emotionTimeline.fromTo(
			firstEmotionCircle,
			{
				scale: 0,
			},
			{
				scale: 1,
				force3D: true,
				duration: 0.4,
				ease: 'sine.out',
			}
		);

		emotionTimeline
			.to(emotionCirclesRef.current, {
				x: '-160svh',
				duration: 1.4,
				ease: 'none',
			})
			.to(emotionCirclesRef.current, {
				y: '-80svh',
				duration: 1,
				ease: 'none',
			})
			.to(emotionCirclesRef.current, {
				x: '-60svh',
				duration: 1,
				ease: 'none',
			});

		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 100);

		return () => gsapContext.revert();
	}, []);

	return (
		<>
			<Main>
				<HeroSection ref={heroSectionRef}>
					<HeroSectionAll ref={heroAllRef}>
						<HeroWrap ref={heroRef}>
							<HeroSpot ref={heroBgWrapRef}>
								<HeroMask ref={heroBgRef}>
									<MaskBg>
										<MaskImage src="/assets/img_hero.jpg" alt="cloud" />
									</MaskBg>
								</HeroMask>
							</HeroSpot>

							<HeroTitleWrap ref={heroTitWrapRef}>
								<HeroTitle ref={heroTitRef}>
									<HeroTitleRow>Your Mood,</HeroTitleRow>
									<HeroTitleRow>Your Music.</HeroTitleRow>
								</HeroTitle>
							</HeroTitleWrap>
						</HeroWrap>

						<WaveWrap ref={waveSectionRef}>
							<WaveWrapInner ref={rippleRef}>
								<WaveTitWrap ref={waveTitWrapRef}>
									<WaveTit ref={waveTitRef}>Your feeling is…</WaveTit>
								</WaveTitWrap>
								<WaveCircleWrap>
									<WaveCircles>
										<WaveCircle className="circle" />
										<WaveCircle className="circle" />
										<WaveCircle className="circle" />
										<WaveCircle className="circle" />
										<WaveCircle className="circle" />
									</WaveCircles>
								</WaveCircleWrap>
							</WaveWrapInner>
						</WaveWrap>
					</HeroSectionAll>
				</HeroSection>

				<EmotionSection ref={emotionSectionRef}>
					<EmotionTextWrap>
						<Container>
							<EmotionWords>
								<EmotionText>
									Some <strong>feelings</strong> can’t be explained.
								</EmotionText>
								<EmotionText space={true}>
									But they can be <strong>heard</strong>.
								</EmotionText>
								<EmotionText>
									We help you <strong>hear</strong> yours.
								</EmotionText>
							</EmotionWords>
						</Container>
					</EmotionTextWrap>

					<EmotionCirclesWrap ref={emotionRef}>
						<EmotionCirclesWrapInner>
							<EmotionCircles className="emotion-circles" ref={emotionCirclesRef}>
								<EmotionCirclesItem className="item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_happy.png" alt="" />
											<CircleTxt>Happy</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_calm.png" alt="" />
											<CircleTxt>Calm</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="item trigger">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_focus.png" alt="" />
											<CircleTxt>Focus</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_sad.png" alt="" />
											<CircleTxt>Sad</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_lonely.png" alt="" />
											<CircleTxt>Lonely</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_dreamy.png" alt="" />
											<CircleTxt>Dreamy</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
							</EmotionCircles>
						</EmotionCirclesWrapInner>
					</EmotionCirclesWrap>
				</EmotionSection>

				<AboutSection>
					<AboutBg>
						<div className="bg-list-wrap">
							<BgList>
								<li className="left top">
									<BgImage src="/assets/bg_about_obj_01.png" alt="album" />
								</li>
								<li className="right top">
									<BgImage src="/assets/bg_about_obj_02.png" alt="record" />
								</li>
								<li className="left bottom">
									<BgImage src="/assets/bg_about_obj_03.png" alt="album" />
								</li>
								<li className="right bottom">
									<BgImage src="/assets/bg_about_obj_04.png" alt="album" />
								</li>
							</BgList>
						</div>
					</AboutBg>
					<Container>
						<AboutWords>
							<AboutWordItem>
								<AboutText>
									You <strong>feel</strong> it.
								</AboutText>
							</AboutWordItem>
							<AboutWordItem>
								<AboutText>
									We <strong>play</strong> it.
								</AboutText>
							</AboutWordItem>
							<AboutWordItem>
								<AboutText>
									A playlist born from your <strong>mood</strong>.
								</AboutText>
							</AboutWordItem>
						</AboutWords>
					</Container>
				</AboutSection>
			</Main>
			<Footer>
				<Container>
					<BtnLink as={Link} to="#">
						<span>Wanna give it a try?</span>
						<img src="/assets/ico_arrow_down_left.svg" alt="arrow" />
					</BtnLink>
				</Container>
			</Footer>
		</>
	);
}

export default App;
