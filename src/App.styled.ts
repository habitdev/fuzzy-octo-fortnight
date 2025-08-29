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
	display: flex;
	align-items: center;
	justify-content: center;
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
	height: 100%;
	overflow: hidden;
`;

export const WaveTitWrap = styled.div`
	opacity: 1;
	position: sticky;
	top: 0;
	left: 0;
	height: 100svh;
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
`;

export const WaveCircles = styled.div`
	position: relative;
	width: 80vh;
	height: 80vh;
	margin-left: auto;
	margin-right: auto;
`;

export const WaveCircle = styled.span`
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40%;
	height: 40%;
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
	padding-bottom: 10rem;
`;

export const EmotionText = styled.p.withConfig({
	shouldForwardProp: (prop) => prop !== 'space',
})<{ space?: boolean }>`
	font-size: 3.75rem;
	${({ space }) => space && 'margin-left: 13vw;'}

	strong {
		font-weight: 800;
	}
`;

export const EmotionCirclesWrap = styled.div`
	position: relative;
	height: 720svh;
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
	grid-template-rows: 80svh 80svh;
	grid-template-columns: repeat(3, 80svh);
	grid-auto-columns: 1fr;
	width: 240svh;
	height: 160svh;
	right: -155svh;
	margin-top: 5svh;
`;

export const Circle = styled.div`
	width: 100%;
	height: 100%;
`;

export const EmotionCirclesItem = styled.li`
	width: 80svh;
	height: 80svh;
	border-radius: 50%;
	padding: 3.75rem;
	border: 1px solid #dcdcdc;

	&:first-child {
		transform: scale(0);
	}
`;

export const CircleObj = styled.figure`
	position: relative;
	text-align: center;
`;

export const CircleImage = styled.img`
	border-radius: 50%;
	width: 100%;
`;

export const CircleTxt = styled.figcaption`
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
	position: relative;
`;

// About Background
export const AboutBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	text-align: center;
`;

export const BgListWrap = styled.div`
	position: sticky;
	width: 100%;
	height: 100%;
`;

export const BgList = styled.ul`
	display: inline-grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	padding-top: 10rem;
`;

export const BgListItem = styled.li<{ position?: string }>`
	display: flex;
	${({ position }) => position === 'top' && 'align-items: flex-end;'}
	${({ position }) => position === 'left' && 'justify-content: flex-end;'}

  &.left.top {
		transform: translate(-100%, -100%);
	}
	&.right.top {
		transform: translate(100%, -100%);
	}
	&.left.bottom {
		transform: translate(-100%, 100%);
	}
	&.right.bottom {
		transform: translate(100%, 100%);
	}
`;

export const BgImage = styled.img`
	opacity: 0.3;
	filter: blur(8px);
`;

// About Words
export const AboutWords = styled.ul`
	font-size: 60px;
	font-weight: 500;
	color: #fff;
	text-align: center;
`;

export const AboutWordItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const AboutText = styled.p`
	strong {
		font-weight: 600;
	}
`;

// Footer
export const Footer = styled.footer`
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
