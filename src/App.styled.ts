import styled from 'styled-components';

// Layout
export const Main = styled.main`
	width: 100%;
`;

export const Container = styled.div`
	padding: 0 40px;
`;

// Visual Section
export const HeroSection = styled.section`
	background-color: #111;
`;

export const HeroSectionAll = styled.div`
	position: relative;
`;

export const HeroWrap = styled.article`
	position: sticky;
	top: 0;
	left: 0;
	height: 250svh;
`;

export const HeroTitleWrap = styled.div`
	position: sticky;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	justify-content: center;
	height: 100svh;
	font-size: 6.875rem;
	font-weight: 700;
	line-height: 1;
	color: #fff;
	text-align: center;
`;

export const HeroTitle = styled.div`
	opacity: 1;
	transform: translateY(0);
	z-index: 2;
	position: relative;
`;

export const HeroTitleRow = styled.p`
	overflow: hidden;
	width: 100%;
`;

export const HeroSpot = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 200svh;
`;

export const HeroMask = styled.figure`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 100svh;
	display: flex;
	align-items: center;
	justify-content: center;
	clip-path: inset(20% 41%);
`;

export const MaskBg = styled.span`
	width: 100%;
	height: 100%;
	/* display: flex;
	align-items: center;
	justify-content: center; */
	background-repeat: no-repeat;
	background-size: cover;
`;

export const MaskImage = styled.img`
	object-fit: cover;
	width: 100%;
`;

// Wave section
export const WaveWrap = styled.article`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 300svh;
	text-align: center;
`;

export const WaveWrapInner = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 100svh;
`;

export const WaveTitWrap = styled.div`
	opacity: 1;
	position: sticky;
	top: 0;
	left: 0;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const WaveTit = styled.h2`
	opacity: 0;
	transform: translateY(30px);
	color: #fff;
	font-size: 6.875rem;
	font-weight: 700;
	z-index: 2;
	margin-bottom: 2rem;
`;

export const WaveCircleWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100svh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export const WaveCircles = styled.div`
	position: relative;
	width: 90vh;
	height: 90vh;
	margin-left: auto;
	margin-right: auto;
`;

export const WaveCircle = styled.span`
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40%;
	height: 0;
	padding-bottom: 40%;
	border-radius: 50%;
	border: 1px solid rgba(255, 255, 255, 0.5);
	transform: translate(-50%, -50%) scale(0.5);
`;

// Emotion Section
export const EmotionSection = styled.section`
	position: relative;
	padding-top: 6rem;
	padding-bottom: 12rem;
	border-top-right-radius: 3.75rem;
	border-top-left-radius: 3.75rem;
	background-color: #fff;
`;

export const EmotionTextWrap = styled.div`
	display: flex;
	justify-content: center;
	text-align: left;
`;

export const EmotionWords = styled.div`
	/* padding-bottom: 10rem; */
`;

export const EmotionText = styled.p.withConfig({
	shouldForwardProp: (prop) => prop !== 'space',
})<{ space?: boolean }>`
	font-size: 3.75rem;
	${({ space }) => space && 'margin-left: 13vw;'}

	strong {
		font-weight: 900;
	}
`;

export const EmotionCirclesWrap = styled.div`
	position: relative;
	height: 700svh;
`;

export const EmotionCirclesWrapInner = styled.div`
	position: sticky;
	top: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: flex-end;
	overflow: hidden;
`;

export const EmotionCircles = styled.ul`
	position: relative;
	display: grid;
	grid-template-rows: 90svh 90svh;
	grid-template-columns: repeat(3, 90svh);
	grid-auto-columns: 1fr;
	width: 270svh;
	height: 180svh;
	right: -175svh;
	margin-top: 5svh;
`;

export const Circle = styled.div`
	width: 100%;
	height: 100%;
`;

export const EmotionCirclesItem = styled.li`
	width: 90svh;
	height: 90svh;
	border-radius: 50%;
	padding: 3.75rem;
	border: 1px solid #dcdcdc;
	transform: scale(0);
	transition: scale 0.2s;

	&:nth-child(6) {
		grid-column: 1;
		grid-row: 2;
	}

	&:nth-child(4) {
		grid-column: 3;
		grid-row: 2;
	}

	&:nth-child(5) {
		grid-column: 2;
		grid-row: 2;
	}
`;

export const CircleObj = styled.figure`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	clip-path: circle(20%);
`;

export const CircleImage = styled.img`
	border-radius: 50%;
	width: 100%;
	object-fit: cover;
`;

export const CircleTxt = styled.figcaption`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3.125rem;
	font-weight: 600;
	color: #fff;
`;

// About Section
export const AboutSection = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
`;

// About Background
export const AboutInner = styled.div`
	width: 100%;
	height: 300svh;
`;

export const BgListWrap = styled.div`
	width: 100%;
`;

export const BgList = styled.ul`
	transform: translate(0, 0);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	overflow: hidden;
	width: 100%;
`;

export const BgListItem = styled.li<{ x?: string; y?: string }>`
	display: flex;
	opacity: 0.1;
	filter: blur(30px);

	${({ x }) => x === 'left' && 'justify-content: flex-end;'}
	${({ y }) => y === 'top' && 'align-items: flex-end;'} 
	${({ x, y }) => {
		if (x === 'left' && y === 'top') return 'transform: translate(-100%, -100%);';
		if (x === 'right' && y === 'top') return 'transform: translate(100%, -100%);';
		if (x === 'left' && y === 'center') return 'transform: translate(-100%, 0);';
		if (x === 'right' && y === 'center') return 'transform: translate(100%, 0);';
		if (x === 'left' && y === 'bottom') return 'transform: translate(-100%, 100%);';
		if (x === 'right' && y === 'bottom') return 'transform: translate(100%, 100%);';
		return '';
	}}
`;

export const BgImage = styled.img`
	opacity: 0.2;
`;

// About Words
export const AboutWords = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	font-size: 3.75rem;
	font-weight: 500;
	color: #fff;
	text-align: center;
`;

export const AboutWordItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100svh;
`;

export const AboutText = styled.p`
	/* opacity: 0;
	transform: translateY(30px); */

	strong {
		font-weight: 600;
	}
`;

// Footer
export const Footer = styled.footer`
	position: relative;
	padding-top: 3rem;
	padding-bottom: 3rem;
	border-top-right-radius: 3.75rem;
	border-top-left-radius: 3.75rem;
	background-color: #5b5bf1;
`;

export const BtnLink = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 0.625em 1em;
	color: #fff;
	font-size: 50px;
	text-decoration: none;
	border: 2px solid #fff;
	border-radius: 2.125rem;

	span + img {
		margin-left: 0.5em;
	}
`;
