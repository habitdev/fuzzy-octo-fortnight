import { Link } from 'react-router-dom';
import {
  AboutBg,
  AboutCircles,
  AboutCirclesWrap,
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
  EmotionSection,
  EmotionText,
  EmotionTextWrap,
  Footer,
  HeroMask,
  HeroSpot,
  HeroTitle,
  HeroTitleRow,
  Main,
  MaskBg,
  MaskImage,
  VisualSection
} from './App.styled';

function App() {
  return (
    <>
      <Main>
        <VisualSection>
          <HeroTitle>
            <HeroTitleRow>
              <span>Your Mood,</span>
            </HeroTitleRow>
            <HeroTitleRow>
              <span>Your Music.</span>
            </HeroTitleRow>
          </HeroTitle>

          <HeroSpot>
            <HeroMask>
              <MaskBg>
                <MaskImage src="/assets/img_hero.jpg" alt="cloud" />
              </MaskBg>
            </HeroMask>
          </HeroSpot>
        </VisualSection>

        <EmotionSection>
          <Container>
            <EmotionTextWrap>
              <div className="emotion-words">
                <EmotionText>
                  Some <strong>feelings</strong> can’t be explained.
                </EmotionText>
                <EmotionText space>
                  But they can be <strong>heard</strong>.
                </EmotionText>
                <EmotionText>
                  We help you <strong>hear</strong> yours.
                </EmotionText>
              </div>
            </EmotionTextWrap>

            <AboutCirclesWrap>
              <AboutCircles>
                <li className="about-circles__item">
                  <Circle>
                    <CircleObj>
                      <CircleImage src="/assets/bg_circle_obj_happy.png" alt="" />
                      <CircleTxt>Happy</CircleTxt>
                    </CircleObj>
                  </Circle>
                </li>
                <li className="about-circles__item">
                  <Circle>
                    <CircleObj>
                      <CircleImage src="/assets/bg_circle_obj_calm.png" alt="" />
                      <CircleTxt>Calm</CircleTxt>
                    </CircleObj>
                  </Circle>
                </li>
                <li className="about-circles__item">
                  <Circle>
                    <CircleObj>
                      <CircleImage src="/assets/bg_circle_obj_focus.png" alt="" />
                      <CircleTxt>Focus</CircleTxt>
                    </CircleObj>
                  </Circle>
                </li>
                <li className="about-circles__item">
                  <Circle>
                    <CircleObj>
                      <CircleImage src="/assets/bg_circle_obj_sad.png" alt="" />
                      <CircleTxt>Sad</CircleTxt>
                    </CircleObj>
                  </Circle>
                </li>
                <li className="about-circles__item">
                  <Circle>
                    <CircleObj>
                      <CircleImage src="/assets/bg_circle_obj_lonely.png" alt="" />
                      <CircleTxt>Lonely</CircleTxt>
                    </CircleObj>
                  </Circle>
                </li>
                <li className="about-circles__item">
                  <Circle>
                    <CircleObj>
                      <CircleImage src="/assets/bg_circle_obj_dreamy.png" alt="" />
                      <CircleTxt>Dreamy</CircleTxt>
                    </CircleObj>
                  </Circle>
                </li>
              </AboutCircles>
            </AboutCirclesWrap>
          </Container>
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
