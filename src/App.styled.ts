import styled from 'styled-components';

// Layout
export const Main = styled.main`
  width: 100%;
`;

// Visual Section
export const VisualSection = styled.section`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;

export const HeroTitle = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  font-size: 110px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
`;

export const HeroTitleRow = styled.p`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroSpot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroMask = styled.figure`
  position: sticky;
  left: 0;
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: inset(18% 36%);
`;

export const MaskBg = styled.span`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MaskImage = styled.img`
  object-fit: cover;
`;

// Emotion Section
export const EmotionSection = styled.section`
  overflow: hidden;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 10rem;
  border-top-right-radius: 3.75rem;
  border-top-left-radius: 3.75rem;
  background-color: #fff;
`;

export const Container = styled.div`
  padding: 0 40px;
`;

export const EmotionTextWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
`;

export const EmotionText = styled.p<{ space?: boolean }>`
  font-size: 60px;
  ${({ space }) => space && 'margin-left: 13vw;'}

  strong {
    font-weight: 800;
  }
`;

// About Section
export const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
`;

export const AboutCirclesWrap = styled.div`
  position: sticky;
  display: flex;
  justify-content: flex-end;
`;

export const AboutCircles = styled.ul`
  display: grid;
  width: 180vh;
  height: 120vh;
  margin-top: 12rem;
  margin-right: -90vh;
  grid-template-rows: 60vh 60vh;
  grid-template-columns: repeat(3, 60vh);
  grid-auto-columns: 1fr;
`;

export const Circle = styled.div`
  width: 60vh;
  height: 60vh;
  border-radius: 50%;
  padding: 3.75rem;
  border: 1px solid #dcdcdc;
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
  ${({ position }) =>
    position === 'top' && 'align-items: flex-end;'}
  ${({ position }) =>
    position === 'left' && 'justify-content: flex-end;'}

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
