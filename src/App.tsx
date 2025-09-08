import {
	AboutInner,
	AboutSection,
	AboutText,
	AboutWordItem,
	AboutWords,
	AboutWordsInner,
	BgImage,
	BgList,
	BgListItem,
	BgListWrap,
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
	WaveCircle,
	WaveCircles,
	WaveCircleWrap,
	WaveTit,
	WaveTitWrap,
	WaveWrap,
	WaveWrapInner,
} from './styles/App.styled';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function App() {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	const heroBgWrapRef = useRef(null);
	const heroBgRef = useRef(null);
	const heroTitRef = useRef(null);
	const waveSectionRef = useRef<HTMLElement | null>(null);
	const waveTitWrapRef = useRef(null);
	const waveTitRef = useRef(null);
	const rippleRef = useRef(null);
	const emotionSectionRef = useRef(null);
	const emotionRef = useRef(null);
	const emotionCirclesRef = useRef(null);
	const aboutSectionRef = useRef<HTMLElement | null>(null);
	const aboutInnerRef = useRef(null);
	const aboutBgListWrapRef = useRef(null);
	const aboutBgListRef = useRef(null);
	const aboutTextListWrapRef = useRef(null);
	const aboutTextListRef = useRef(null);
	const footerRef = useRef(null);
	const footerInnerRef = useRef(null);

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
				clipPath: 'inset(-40% -100%)',
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

			const emotionSelector = gsap.utils.selector(emotionCirclesRef);
			const emotionCircleItem = emotionSelector('.emotion-circles__item');

			const emotionMovement = [
				{ x: '-90svh' },
				{ x: '-180svh' },
				{ y: '-90svh' },
				{ x: '-45svh' },
				null,
				null,
			];

			const emotionTimeline = gsap.timeline({
				scrollTrigger: {
					id: 'st-emotion',
					trigger: emotionRef.current,
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true,
					// markers: true,
				},
			});

			emotionTimeline.to(emotionCircleItem, {
				scale: 1,
				force3D: true,
				duration: 0.3,
				ease: 'sine.out',
			});

			emotionMovement.forEach((config, index) => {
				const item = emotionCircleItem[index];
				const innerCircle = item.querySelector('figure');
				const txt = item.querySelector('figcaption');

				emotionTimeline
					.to(
						innerCircle,
						{
							clipPath: 'circle(40%)',
							duration: 0.15,
							ease: 'sine.inOut',
						},
						index === 0 ? '<+=0.05' : '<'
					)
					.to(
						txt,
						{
							opacity: 1,
							duration: 0.05,
							ease: 'none',
						},
						'<+=0.03'
					);

				if (config) {
					emotionTimeline.to(emotionCirclesRef.current, {
						...config,
						duration: 0.2,
						ease: 'none',
					});
				} else {
					emotionTimeline.to(
						{},
						{
							duration: 0.3,
							ease: 'none',
						}
					);
				}

				if (index < emotionCircleItem.length - 1) {
					emotionTimeline
						.to(
							innerCircle,
							{
								clipPath: 'circle(20%)',
								duration: 0.15,
								ease: 'sine.out',
							},
							'<+=0.04'
						)
						.to(
							txt,
							{
								opacity: 0,
								duration: 0.05,
								ease: 'none',
							},
							'<'
						);
				}
			});

			const bgListSectionSelector = gsap.utils.selector(aboutSectionRef);
			const bgListItems = bgListSectionSelector('.bg-item');

			const aboutTl = gsap.timeline({
				scrollTrigger: {
					id: 'images',
					trigger: aboutSectionRef.current,
					start: 'top top',
					endTrigger: footerRef.current,
					end: 'top bottom',
					scrub: 1,
					pin: aboutBgListWrapRef.current,
					pinSpacing: false,
					// markers: true,
				},
			});

			aboutTl.addLabel('start-bg');

			bgListItems.forEach((item, index) => {
				aboutTl.to(
					item,
					{
						transform: 'translate(0, 0)',
						opacity: 0.3,
						filter: 'blur(5px)',
						duration: 3,
						ease: 'power3.out',
					},
					`start-bg+=${index * 0.8}`
				);
			});

			aboutTl.to(
				aboutBgListRef.current,
				{
					y: '-50%',
					duration: 8,
					ease: 'power4.out',
				},
				'start-bg+=1.5'
			);

			const aboutTxtWrapSelector = gsap.utils.selector(aboutTextListWrapRef);
			const aboutTxts = aboutTxtWrapSelector('[data-about-words]');
			ScrollTrigger.create({
				id: 'words',
				trigger: aboutSectionRef.current,
				start: 'top top',
				end: 'bottom bottom',
				pin: aboutTextListRef.current,
				scrub: true,
				pinSpacing: false,
				// markers: true,
				onUpdate: (self) => {
					const progress = self.progress; // 0 ~ 1
					const index = Math.min(aboutTxts.length - 1, Math.floor(progress * aboutTxts.length));

					aboutTxts.forEach((item, i) => {
						item.classList.toggle('on', i === index);
					});
				},
			});

			gsap.fromTo(
				footerInnerRef.current,
				{ y: 100 },
				{
					y: 0,
					duration: 0.3,
					scrollTrigger: {
						trigger: footerRef.current,
						start: 'top bottom',
						end: 'center bottom',
						toggleActions: 'play none play reverse',
						// markers: true,
					},
				}
			);

			// setTimeout(() => {
			// 	ScrollTrigger.refresh();
			// }, 100);
		});

		return () => gsapContext.revert();
	}, []);

	return (
		<>
			<Main>
				<HeroSection>
					<HeroSectionAll>
						<HeroWrap>
							<HeroSpot ref={heroBgWrapRef}>
								<HeroMask ref={heroBgRef}>
									<MaskBg style={{ backgroundImage: 'url(/assets/img_hero.jpg)' }}>
										<span className="a11y-hidden">배경</span>
									</MaskBg>
								</HeroMask>
							</HeroSpot>

							<HeroTitleWrap>
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
								<EmotionText space='small'>Some feelings can’t be explained.</EmotionText>
								<EmotionText space="big">But they can be heard.</EmotionText>
								<EmotionText>We help you hear yours.</EmotionText>
							</EmotionWords>
						</Container>
					</EmotionTextWrap>

					<EmotionCirclesWrap ref={emotionRef}>
						<EmotionCirclesWrapInner>
							<EmotionCircles className="emotion-circles" ref={emotionCirclesRef}>
								<EmotionCirclesItem className="emotion-circles__item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_happy.png" alt="" />
											<CircleTxt>Happy</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="emotion-circles__item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_calm.png" alt="" />
											<CircleTxt>Calm</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="emotion-circles__item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_focus.png" alt="" />
											<CircleTxt>Focus</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="emotion-circles__item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_sad.png" alt="" />
											<CircleTxt>Sad</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="emotion-circles__item">
									<Circle>
										<CircleObj>
											<CircleImage src="/assets/bg_circle_obj_lonely.png" alt="" />
											<CircleTxt>Lonely</CircleTxt>
										</CircleObj>
									</Circle>
								</EmotionCirclesItem>
								<EmotionCirclesItem className="emotion-circles__item">
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

				<AboutSection ref={aboutSectionRef}>
					<AboutInner ref={aboutInnerRef}>
						<BgListWrap ref={aboutBgListWrapRef}>
							<BgList ref={aboutBgListRef}>
								<BgListItem x="left" y="top" className="bg-item">
									<BgImage src="/assets/bg_about_obj_01.png" alt="album" />
								</BgListItem>
								<BgListItem x="right" y="top" className="bg-item">
									<BgImage src="/assets/bg_about_obj_02.png" alt="record" />
								</BgListItem>
								<BgListItem x="left" y="center" className="bg-item">
									<BgImage src="/assets/bg_about_obj_03.png" alt="album" />
								</BgListItem>
								<BgListItem x="right" y="center" className="bg-item">
									<BgImage src="/assets/bg_about_obj_04.png" alt="album" />
								</BgListItem>
								<BgListItem x="left" y="bottom" className="bg-item">
									<BgImage src="/assets/bg_about_obj_01.png" alt="album" />
								</BgListItem>
								<BgListItem x="right" y="bottom" className="bg-item">
									<BgImage src="/assets/bg_about_obj_02.png" alt="record" />
								</BgListItem>
							</BgList>
						</BgListWrap>
					</AboutInner>

					<AboutWords ref={aboutTextListWrapRef}>
						<AboutWordsInner ref={aboutTextListRef}>
							<AboutWordItem data-about-words>
								<Container>
									<AboutText>
										You <strong>feel</strong> it.
									</AboutText>
								</Container>
							</AboutWordItem>
							<AboutWordItem data-about-words>
								<Container>
									<AboutText>
										We <strong>play</strong> it.
									</AboutText>
								</Container>
							</AboutWordItem>
							<AboutWordItem data-about-words>
								<Container>
									<AboutText>
										A playlist born from your <strong>mood</strong>.
									</AboutText>
								</Container>
							</AboutWordItem>
						</AboutWordsInner>
					</AboutWords>
				</AboutSection>
			</Main>
			<Footer ref={footerRef}>
				<Container ref={footerInnerRef}>
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
